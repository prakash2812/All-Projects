const mongoose = require('mongoose')
const slugify = require('slugify')

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size']
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          //this will not work for update query
          return val < this.price
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String],
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)
/* Virtuals don't add in db its just display the result for every get request */
tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7
})

/* four types of middle ware in mongosse 
 Document,query,aggregate and model */

/* Document middle ware */
// run before save or create even
tourSchema.pre('save', function(next) {
  // slugify used to pass strings to the url
  this.slug = slugify(this.name, { lower: true })
  next()
})

tourSchema.post('save', function(doc, next) {
  // it will have the doc data after pre events done
  console.log('document data', doc)
  next()
})

/* Query middle ware  */
tourSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } })

  this.start = Date.now()
  next()
})

tourSchema.post(/^find/, function(doc, next) {
  console.log(
    `query execution take time ${Date.now() - this.start} milliseconds`
  )
  next()
})

/* Aggregate middleware */
tourSchema.pre('aggregate', function(next) {
  console.log('aggregataion reference', this)
  console.log('aggregataion reference', this._pipeline)
  // console.log('aggregataion pipeline reference', this._pipeline())
  this._pipeline.unshift({ $match: { secretTour: { $ne: true } } })
  next()
})
tourSchema.post('aggregate', function(doc, next) {
  console.log('aggregataion reference', doc)
  next()
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour
