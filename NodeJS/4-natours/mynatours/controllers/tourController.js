const Tour = require('./../models/tourModel')
const APIFeatures = require('../utils/apiFeatures')
const AppError = require('../utils/appError')

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

exports.getTours = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id)
    // Tour.findOne({ _id: req.params.id })
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    })
  } catch (err) {
    // new AppError(`Can't find the url ${req.originalUrl} on server`, 404)
    res.status(400).json({ status: 'fail', message: err })
  }
}
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body)
    res.status(200).json({
      status: 'success',
      data: {
        tour: newTour
      }
    })
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err })
  }
}
exports.updateTour = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err })
  }
}
exports.deleteTour = async (req, res) => {
  try {
    const deleted = await Tour.findOneAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: {
        tour: deleted
      }
    })
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err })
  }
}

exports.getTourStats = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err })
  }
}
exports.getMonthlyPlan = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err })
  }
}
