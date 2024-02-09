const mongoose = require('mongoose')
const { DATABASE_URL } = require('../libs/env')

module.exports = {
	async connect() {
		try {
			await mongoose.connect(DATABASE_URL)
			console.log('Database Connected!')
		} catch (error) {
			console.log('Error ============')
			console.log(error)
			process.exit(1)
		}
	},
}
