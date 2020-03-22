import React, { Component, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { storeData, updateData } from '../store/actions/eventActions'


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data._id || null,
            title: props.data.title || null,
            date: props.data.date || props.selectedDate,
            note: props.data.note || null,
            isEdit: props.data._id ? false : true
        }
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let { id } = this.state
        if (id) {
            this.props.updateData(this.state, id)
        } else {
            this.props.storeData(this.state)
        }
        this.props.closeHandler()
    }
    render() {
        let { id, title, date, note, isEdit } = this.state
        let isDone = title && date

        return (
            <Fragment>
                <Modal show={this.props.isOpen} onHide={this.props.closeHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>{id ? `Edit Event` : `Add New Event`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {!isEdit ?
                            <div className="row">
                                <div className="col-12">
                                    <p>Title: {title}</p>
                                    <p>Note: {note}</p>
                                    <p>Date: {date}</p>
                                    <Button type="button" variant="dark" size="lg" className="mt-2 float-left" onClick={() => this.setState({ isEdit: true })}>Edit</Button>
                                </div>
                            </div> :
                            <Form onSubmit={this.submitHandler}>
                                <Form.Group>
                                    <Form.Label>Title <span>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        defaultValue={title}
                                        onChange={this.changeHandler}
                                        placeholder="Enter Title"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Note</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="4"
                                        name="note"
                                        defaultValue={note}
                                        onChange={this.changeHandler}
                                        placeholder="Enter Note"
                                    />
                                </Form.Group>

                                {id && <Button className="float-left" type="button" variant="dark" size="lg" onClick={() => this.setState({ isEdit: false })}>Back</Button>}
                                <Button className="float-right" type="submit" variant="dark" disabled={!isDone} size="lg">Submit</Button>
                            </Form>}
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}
export default connect(null, { storeData, updateData })(Edit);