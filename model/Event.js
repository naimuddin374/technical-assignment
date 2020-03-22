const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2');

const EventSchema = new Schema({
    id: String,
    title: String,
    date: String,
    note: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

EventSchema.plugin(mongoosePaginate);
const Event = mongoose.model('Event', EventSchema);
module.exports = Event