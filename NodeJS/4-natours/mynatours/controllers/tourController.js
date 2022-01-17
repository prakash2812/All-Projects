const Tour = require('./../models/tourModel')
const APIFeatures = require('../utils/apiFeatures')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
//Old way of crating documents
/* const tour = new Tour({ name: 'arjun', price: 123 })
tour.save() */

// Middle wares // aliases
exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5'
  req.query.sort = '-ratingsAverage,price'
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty'
  next()
}

/* Crud handlers */

exports.getTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination()

  const tours = await features.query

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  })
})

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id)
  console.log('tour id got error')
  if (!tour) {
    return next(new AppError(`can find the valid tourID ${req.params.id}`, 404))
  }
  // Tour.findOne({ _id: req.params.id })
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
})

exports.createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      tour: newTour
    }
  })
})
exports.updateTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
})
exports.deleteTour = catchAsync(async (req, res, next) => {
  const deleted = await Tour.findOneAndDelete(req.params.id)
  res.status(204).json({
    status: 'success',
    data: {
      tour: deleted
    }
  })
})

exports.getTourStats = catchAsync(async (req, res, next) => {
  const tourStats = await Tour.aggregate([
    { $match: { ratingsAverage: { $gte: 4.5 } } },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        // _id: '$difficulty',
        totalTours: { $sum: 1 },
        totalRatings: { $sum: '$ratingsQuantity' },
        avgRatings: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    { $sort: { avgRatings: 1 } }
    // { $match: { _id: { $ne: 'difficult' } } }
  ])
  res.status(200).json({
    status: 'success',
    result: tourStats.length,
    data: {
      tourStats
    }
  })
})
exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const givenYear = req.params.year
  const monthlyPlan = await Tour.aggregate([
    { $unwind: '$startDates' },
    {
      $match: {
        startDates: {
          $gte: new Date(`${givenYear}-01-01`),
          $lte: new Date(`${givenYear}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        noToursStarts: { $sum: 1 },
        tours: { $push: '$name' },
        prices: { $push: '$price' }
      }
    },
    { $addFields: { month: '$_id' } },
    { $project: { _id: 0 } }
    // { $match: { _id: { $ne: 'difficult' } } }
  ])
  res.status(200).json({
    status: 'success',
    result: monthlyPlan.length,
    data: {
      monthlyPlan
    }
  })
})
