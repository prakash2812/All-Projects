const fs = require('fs')

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

exports.checkId = (req, res, next, val) => {
  if (val > tours.length) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'fail with Invalid Id' })
  }
  next()
}

exports.checkBody = (req, res, next) => {
  if (!(req.body.name && req.body.price)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Bad Request missing name / price in body request'
    })
  }
  next()
}
/* Crud handlers */
exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    tours
  })
}
exports.getTour = (req, res) => {
  const { id } = req.params
  const tour = tours.find(tourItem => tourItem.id === +id)
  /* this one we given in middle for id parameter url in checkId
  if (!tour) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'fail with Invalid Id' });
  } */
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
}
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1
  const createNewTour = Object.assign({ id: newId }, req.body)
  const newTours = tours.push(createNewTour)
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      if (err) console.log('error in create--', err)
      res.status(201).json({
        status: 'success',
        createdAt: req.requestTime,
        data: {
          tours: createNewTour
        }
      })
    }
  )
}
exports.updateTour = (req, res) => {
  const { id } = req.params // we have to use middle ware to get id else
  const tourData = tours.find(tour => tour.id === +id)
  res.status(200).json({ status: 'success', data: { tour: '<updated tour>' } })
}
exports.deleteTour = (req, res) => {
  res.status(204).json({ status: 'success', data: null })
}
