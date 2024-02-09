const express = require('express')
const cors = require('cors')
const modules = require('./modules')
const database = require('./database')

module.exports = async (app) => {
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cors())
	app.use(express.static(__dirname + '/public'))

	database.connect()

	modules.forEach((module) => module(app))
}
