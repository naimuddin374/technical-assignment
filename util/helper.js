module.exports = {
    actionSuccess(res, message = 'Success', data = null) {
        res.status(200).json({
            message,
            data,
        })
    },
    createdSuccess(res, data = null, message = 'Created Successful!') {
        res.status(201).json({
            message,
            data,
        })
    },
    updatedSuccess(res, data = null, message = 'Update Successful!') {
        res.status(201).json({
            message,
            data,
        })
    },
    dataFound(res, data = null) {
        res.status(302).json({
            message: 'Data Found!',
            data,
        })
    },
    badRequest(res, error) {
        res.status(400).json({
            message: "Bad Request!",
            error
        })
    },
    validationError(res, error) {
        res.status(406).json({
            message: 'Validation Error!',
            error
        })
    },
    serverError(res, error) {
        res.status(500).json({
            message: 'Server Error Occurred!',
            error
        })
    }
}