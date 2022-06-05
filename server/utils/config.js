require('dotenv').config()
const common = require('@root/config/common')

const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
const PORT = process.env.PORT || 3003

module.exports = {
  ...common,
  MONGODB_URI,
  PORT,
}
