const Tour = require('./../models/tourModel')

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
    console.log('query --', req.query)
    //Build querying
    //1A)filtering
    const queryObject = { ...req.query }
    const excludeFields = ['page', 'sort', 'limit', 'fields']
    excludeFields.forEach(item => delete queryObject[item])

    //1B)advance filtering
    // ?duration[lte]=5&difficulty=easy
    let queryStr = JSON.stringify(queryObject)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
    console.log('query string', JSON.parse(queryStr))

    //2) Sorting
    let query = Tour.find(JSON.parse(queryStr))
    //price and -price are ascending and descending order
    //minus id for descending order
    // ?sort=price,duration
    // ?sort=-price,-duration
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      console.log('sorting by', sortBy)
      query = query.sort(sortBy)
    } else {
      query = query.sort('-createdAt')
    }

    // 3) Field limits
    //-name and name,price are only exclude and include fields
    // ?fields=name,price
    // ?fields=-__v
    if (req.query.fields) {
      const fieldsBy = req.query.fields.split(',').join(' ')
      query = query.select(fieldsBy)
    } else {
      // only excluse __v remains fields let it be
      query = query.select('-__v')
    }

    //4) Pagination
    const page = req.query.page || 1
    const limit = req.query.limit || 100
    const skip = (page - 1) * limit
    if (req.query.page) {
      const numberOfDocumentsRecord = await Tour.countDocuments()
      if (skip >= numberOfDocumentsRecord)
        throw new Error('Invalid page number')
    }
    query = query.skip(skip).limit(limit)
    // execute query
    // ?price[gte]=5&sort=-price&fields=name,price&page=1&limit=2
    const tours = await query

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    })
    /*  const tours = await Tour.find(req.query)
    /*  const tours = await Tour.find({difficulty:easy,duration:5})
    const query = await Tour.find()
      .where('duration')
      .equals(5)
      .where('difficulty')
      .equals('easy') */
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
    res
      .status(400)
      .json({ status: 'fail', message: 'Invalid data in creation document' })
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
