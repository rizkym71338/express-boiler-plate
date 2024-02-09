const { model } = require('../../database/models')

module.exports = class Repository {
	findMany = async () => await model.customer.find()
	findById = async ({ id }) => await model.customer.findOne({ id })
	findByName = async ({ name }) => await model.customer.findOne({ name })
	createOne = async ({ name }) => await new model.customer({ name }).save()
	updateById = async ({ id, data: { name } }) =>
		await model.customer.updateOne({ id }, { name })
	deleteById = async ({ id }) => await model.customer.deleteOne({ id })
}
