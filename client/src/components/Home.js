import React, { Component, Fragment } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import Edit from './Edit';
import socketIOClient from "socket.io-client";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedDate: new Date(),
            selectedData: {},
            response: [],
            endpoint: "http://localhost:4000/"
        }
    }
    handleDateClick = arg => {
        this.setState({
            selectedData: {},
            selectedDate: arg.dateStr,
            isOpen: true,
        })
    }
    eventHandler = info => {
        let { response } = this.state
        this.setState({ selectedData: response.filter(item => item.id === info.event.id)[0], isOpen: true })
    }
    closeHandler = () => {
        this.setState({ selectedDate: {}, isOpen: false })
    }
    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
    }
    render() {
        let { isOpen, selectedDate, selectedData, response } = this.state
        return (
            <Fragment>
                <section className="section-padding">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <FullCalendar
                                    defaultView="dayGridMonth"
                                    plugins={[dayGridPlugin, interactionPlugin, resourceTimelinePlugin]}
                                    dateClick={this.handleDateClick}
                                    eventClick={this.eventHandler}
                                    events={response}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {isOpen &&
                    <Edit
                        isOpen={isOpen}
                        data={selectedData}
                        selectedDate={selectedDate}
                        closeHandler={this.closeHandler}
                    />
                }
            </Fragment>
        )
    }
}
export default Home