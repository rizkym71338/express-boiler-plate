const dotEnv = require('dotenv')

dotEnv.config()

module.exports = {
	PORT: process.env.PORT,
	DATABASE_URL: process.env.DATABASE_URL,
}
