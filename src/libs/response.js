const status = require('http-status')

module.exports = class Response {
	ok = ({ message, res, ...data }) =>
		res.status(status.OK).json({
			status: {
				code: status.OK,
				name: status['200_NAME'],
			},
			message,
			...data,
		})

	badRequest = ({ message, res, ...data }) =>
		res.status(status.BAD_REQUEST).json({
			status: {
				code: status.BAD_REQUEST,
				name: status['400_NAME'],
			},
			message,
			...data,
		})

	notFound = ({ message, res, ...data }) =>
		res.status(status.NOT_FOUND).json({
			status: {
				code: status.NOT_FOUND,
				name: status['404_NAME'],
			},
			message,
			...data,
		})

	internalServerError = ({ error, res, ...data }) =>
		res.status(status.INTERNAL_SERVER_ERROR).json({
			status: {
				code: status.INTERNAL_SERVER_ERROR,
				name: status['500_NAME'],
			},
			message: error.message,
			...data,
		})
}
