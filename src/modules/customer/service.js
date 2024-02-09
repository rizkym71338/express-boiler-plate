const Repository = require('./repository')

module.exports = class Service {
	constructor() {
		this.repository = new Repository()
	}

	findMany = async () => {
		const customers = await this.repository.findMany()
		if (customers.length == 0) return { notfound: 'customers not found' }
		return { data: customers }
	}

	findById = async ({ id }) => {
		const customer = await this.repository.findById({ id })
		if (!customer) return { notfound: 'customer not found' }
		return { data: customer }
	}

	create = async ({ name }) => {
		const customer = await this.repository.findByName({ name })
		if (customer) return { already: 'customer already exists' }
		const newCustomer = await this.repository.createOne({ name })
		return { data: newCustomer }
	}

	updateById = async ({ id, data: { name } }) => {
		const customer = await this.repository.findById({ id })
		if (!customer) return { notfound: 'customer not found' }
		const options = { id, data: { name } }
		const updatedCustomer = await this.repository.updateById(options)
		return { data: updatedCustomer }
	}

	deleteById = async ({ id }) => {
		const customer = await this.repository.findById({ id })
		if (!customer) return { notfound: 'customer not found' }
		const deletedCustomer = await this.repository.deleteById({ id })
		return { data: deletedCustomer }
	}
}
