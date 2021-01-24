require('dotenv').config()

let PORT = process.env.PORT || 5000
let NAMEFILE_PATH = process.env.NAMEFILE_PATH || '../names.json'

if (process.env.NODE_ENV === 'test') {
  NAMEFILE_PATH = process.env.TEST_NAMEFILE_PATH || '../testNames.json'
}

module.exports = {
  NAMEFILE_PATH,
  PORT
}