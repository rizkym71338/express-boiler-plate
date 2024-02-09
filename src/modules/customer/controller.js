const Response = require('../../libs/response')
const Service = require('./service')

module.exports = class Controller {
	constructor() {
		this.service = new Service()
		this.response = new Response()
	}

	findMany = async (_, res) => {
		try {
			const { data, notfound } = await this.service.findMany()
			if (notfound)
				return this.response.notFound({ message: notfound, res })
			return this.response.ok({ customers: data, res })
		} catch (error) {
			return this.response.internalServerError({ error, res })
		}
	}

	find = async (req, res) => {
		try {
			const { id } = req.params
			const { data, notfound } = await this.service.findById({ id })
			if (notfound)
				return this.response.notFound({ message: notfound, res })
			return this.response.ok({ customer: data, res })
		} catch (error) {
			return this.response.internalServerError({ error, res })
		}
	}

	create = async (req, res) => {
		try {
			const { name } = req.body
			const { already } = await this.service.create({ name })
			if (already)
				return this.response.badRequest({ message: already, res })
			return this.response.ok({ res })
		} catch (error) {
			return this.response.internalServerError({ error, res })
		}
	}

	update = async (req, res) => {
		try {
			const { id } = req.params
			const { name } = req.body
			const options = { id, data: { name } }
			const { notfound } = await this.service.updateById(options)
			if (notfound)
				return this.response.notFound({ message: notfound, res })
			return this.response.ok({ res })
		} catch (error) {
			return this.response.internalServerError({ error, res })
		}
	}

	delete = async (req, res) => {
		try {
			const { notfound } = await this.service.deleteById({
				id: req.params.id,
			})
			if (notfound)
				return this.response.notFound({ message: notfound, res })
			return this.response.ok({ res })
		} catch (error) {
			return this.response.internalServerError({ error, res })
		}
	}
}
