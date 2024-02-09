const mongoose = require('mongoose')
const cuid = require('cuid')

module.exports = mongoose.model(
	'customer',
	new mongoose.Schema(
		{
			id: { type: String, unique: true, default: cuid() },
			name: String,
		},
		{ timestamps: true }
	).set('toJSON', {
		transform: (_, ret) => {
			delete ret._id
			delete ret.__v
		},
	})
)
