require('dotenv').config()

let PORT = process.env.PORT
let NAMEFILE_PATH = process.env.NAMEFILE_PATH

if (process.env.NODE_ENV === 'test') {
  NAMEFILE_PATH = process.env.TEST_NAMEFILE_PATH
}

module.exports = {
  NAMEFILE_PATH,
  PORT
}