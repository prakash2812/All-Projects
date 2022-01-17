class APIFeatures {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  /*  const tours = await Tour.find(req.query)
    /*  const tours = await Tour.find({difficulty:easy,duration:5})
    const query = await Tour.find()
      .where('duration')
      .equals(5)
      .where('difficulty')
      .equals('easy') */

  //Build querying

  //1A)filtering
  filter() {
    const queryObject = { ...this.queryString }
    const excludeFields = ['page', 'sort', 'limit', 'fields']
    excludeFields.forEach(item => delete queryObject[item])

    //1B)advance filtering
    // ?duration[lte]=5&difficulty=easy
    let queryStr = JSON.stringify(queryObject)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
    this.query = this.query.find(JSON.parse(queryStr))
    return this
  }

  //2) Sorting
  sort() {
    //price and -price are ascending and descending order
    //minus id for descending order
    // ?sort=price,duration
    // ?sort=-price,-duration
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ')
      console.log('sorting by', sortBy)
      this.query = this.query.sort(sortBy)
    } else {
      this.query = this.query.sort('-createdAt')
    }
    return this
  }

  //3) Field limits
  limitFields() {
    //-name and name,price are only exclude and include fields
    // ?fields=name,price
    // ?fields=-__v
    if (this.queryString.fields) {
      const fieldsBy = this.queryString.fields.split(',').join(' ')
      this.query = this.query.select(fieldsBy)
    } else {
      // only excluse __v remains fields let it be
      this.query = this.query.select('-__v')
    }
    return this
  }

  //4) Pagination
  pagination() {
    const page = this.queryString.page || 1
    const limit = this.queryString.limit || 100
    const skip = (page - 1) * limit
    /* if (this.queryString.page) {
            const numberOfDocumentsRecord = await Tour.countDocuments()
            if (skip >= numberOfDocumentsRecord)
                throw new Error('Invalid page number')
        } */
    this.query = this.query.skip(skip).limit(limit)
    // execute this.query
    // ?price[gte]=5&sort=-price&fields=name,price&page=1&limit=2
    return this
  }
}

module.exports = APIFeatures
