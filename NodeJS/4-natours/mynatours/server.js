const dotenv = require('dotenv')
const mongoose = require('mongoose')

/* we keep this code top cause it should catch errors before/after the app start */
process.on('uncaughtException', err => {
  console.log('Uncaught exception 😂')
  console.log('error', err.name, err.message)
  process.exit(1)
})

dotenv.config({
  path: './config.env'
})
const app = require('./app')

const DB = process.env.DATABASE_REMOTE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(connection => {
    // console.log('DB connection successful', connection.connections)
    console.log('DB connection successful')
  })
// console.log(app.get('env')); --> express env is dev by default
//console.log(process.env) //--> node env config by process
const port = process.env.PORT || 8000
console.log(process.env.PORT)
const server = app.listen(port, () => {
  console.log('server listening--')
})

process.on('unhandledRejection', err => {
  console.log('Unhandled rejection 😂')
  console.log('error', err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})
