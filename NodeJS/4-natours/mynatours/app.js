const express = require('express')
const morgan = require('morgan') // for middle ware - third party
const tourRouter = require('./routers/tourRouters')
const userRouter = require('./routers/userRouters')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')

const app = express()

/* middle wares */
app.use(express.json()) // for middle ware
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.static(`${__dirname}/public`))

// own middle it has middleware stackString
// next() is requires to pass all middle ware layers stack
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

/* this middleware will execute in order , so above routers are failed with some invalid router path
 * all type of router will execute
 */
app.all('*', (req, res, next) => {
  /* res.status(404).json({
    status: 'fail',
    message: `Can't find the url ${req.originalUrl}  on server`
  }) */
  /* const err = new Error(`Can't find the url ${req.originalUrl}  on server`)
  err.statusCode = 404
  err.status = 'fail' */
  next(new AppError(`Can't find the url ${req.originalUrl}  on server`, 404))
})

/* express middleware will automatically identified if any middle have 4 parameters with err,req,res,next
 * this is called or worked as global error middle ware handler though out app
 */
app.use(globalErrorHandler)
/* listen server */
module.exports = app
