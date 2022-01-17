const dotenv = require('dotenv')
const mongoose = require('mongoose')

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
    console.log('DB connection successful', connection.connections)
  })
// console.log(app.get('env')); --> express env is dev by default
//console.log(process.env) //--> node env config by process
const port = process.env.PORT || 8000
console.log(process.env.PORT)
app.listen(port, () => {
  console.log('server listening--')
})
