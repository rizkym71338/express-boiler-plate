const Controller = require('./controller')

module.exports = (app) => {
	const controller = new Controller()

	app.get('/customers', controller.findMany)
	app.get('/customers/:id', controller.find)
	app.post('/customers', controller.create)
	app.put('/customers/:id', controller.update)
	app.delete('/customers/:id', controller.delete)
}
