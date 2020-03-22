const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require("http")
const socketIo = require("socket.io")


const Event = require('./model/Event')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))
require('dotenv').config()


// Import Routes
const path = require('path')
const eventRouter = require('./routers/eventRouter')


// Router 
app.use('/api/events', eventRouter)


app.get('/', (req, res) => {
    res.json({
        message: "Welcome To Our Application"
    })
})


const createServer = http.createServer(app);
const io = socketIo(createServer);


io.on("connection", socket => {
    setInterval(
        () => {
            Event.find()
                .then(res => {
                    socket.emit("FromAPI", res)
                })
        },
        1000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
});






// Database Connection
const PORT = process.env.PORT || 4000
let server = createServer.listen(PORT, () => {
    let port = server.address().port
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`)

    // Database Configuration
    mongoose.connect('mongodb://localhost:27017/event-calendar', { useNewUrlParser: true }, () => {
        console.log('Local Database Connected...')
    })
})