const Event = require('../model/Event');
const { actionSuccess, createdSuccess, updatedSuccess, badRequest, serverError, validationError } = require('../util/helper');

module.exports = {
    store(req, res) {
        let { title, date, note } = req.body
        let event = new Event({
            title,
            date,
            note,
        })
        event.id = event._id
        event.save()
            .then(result => {
                return createdSuccess(res)
            })
            .catch(error => {
                return serverError(res, error)
            })
    },
    update(req, res) {
        let { title, note } = req.body
        Event.findOneAndUpdate({ _id: req.params.id }, { $set: { title, note } }, { new: true })
            .then(result => {
                return updatedSuccess(res, result._doc)
            })
            .catch(error => {
                return serverError(res, error)
            })
    },
    remove(req, res) {
        let { id } = req.params
        Event.findOneAndDelete({ _id: id })
            .then(result => {
                return actionSuccess(res, 'Delete Successful!')
            })
            .catch(error => serverError(res, error))
    },
}