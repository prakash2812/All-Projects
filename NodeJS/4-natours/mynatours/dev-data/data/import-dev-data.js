const fs = require('fs')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Tour = require('./../../models/tourModel')

dotenv.config({ path: './../../config.env' })

const data = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
)

const DB = process.env.DATABASE_REMOTE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(conn => console.log('DB connection Successful', conn.connections))

const importData = async () => {
  try {
    const result = await Tour.create(data)
    console.log('data successfully loaded')
  } catch (error) {
    console.log(error)
  }
  process.exit()
}

const deleteData = async () => {
  try {
    const result = await Tour.deleteMany()
    console.log('data successfully deleted')
  } catch (error) {
    console.log(error)
  }
  process.exit()
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
