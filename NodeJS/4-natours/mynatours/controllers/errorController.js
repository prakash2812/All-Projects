/* express middleware will automatically identified if any middle have 4 parameters with err,req,res,next
 * this is called or worked as global error middle ware handler though out app
 */

const AppError = require('../utils/appError')
/* these handle errors are explicitly making them as optional errors which are actual from mongodb issues
 *these are for production env to  display the errors in simple form
 *
 */
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path} is ${err.value}`

  return new AppError(message, 404)
}
const handleDuplicateFieldsErrorDB = err => {
  //   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]

  const value = err.keyValue.name
  const message = `Duplicate field Value: ${value}. please use unique names`
  return new AppError(message, 404)
}
const handleValidationErrorDB = err => {
  const message = Object.values(err.errors)
    .map(data => data.message)
    .join('. **')
  return new AppError(message, 404)
}

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack
  })
}

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err)

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went Wrong'
    })
  }
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'
  if (process.env.NODE_ENV.trim() !== 'production') {
    sendErrorDev(err, res)
  } else {
    let error = { ...err }

    //   this CastError is not working due to error object structure is different
    if (error.name === 'CastError') error = handleCastErrorDB(error)

    if (error.code === 11000) error = handleDuplicateFieldsErrorDB(error)

    //   this ValidationError is not working due to error object structure is different
    if (error.name === 'ValidatorError') error = handleValidationErrorDB(error)
    sendErrorProd(error, res)
  }

  next()
}
