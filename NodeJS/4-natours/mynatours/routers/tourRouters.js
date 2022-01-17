const express = require('express')

const router = express.Router()
const tourController = require('./../controllers/tourController')

const {
  getTours,
  getTour,
  checkBody,
  createTour,
  updateTour,
  deleteTour,
  checkId,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan
} = tourController

// router.param('id', checkId);
/* get all tours */
// app.get('/api/v1/tours', getTours);
/* get tour */
// app.get('/api/v1/tours/:id', getTour);

/* create tour */
//  to pass data to request for post call we use middle ware
// app.use(express.json())
// app.post('/api/v1/tours', createTour);

/* update Tour */
// app.patch('/api/v1/tours/:id', updateTour);

/* Delete Tour */
// app.delete('/api/v1/tours/:id', deleteTour);

/* router.route('/').get(getTours).post(checkBody, createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour); */
router.route('/top-5-cheap').get(aliasTopTours, getTours)
router.route('/tour-stats').get(getTourStats)
router.route('/monthly-plan/:year').get(getMonthlyPlan)
router
  .route('/')
  .get(getTours)
  .post(createTour)
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour)

module.exports = router
