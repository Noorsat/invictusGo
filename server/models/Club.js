const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose
<<<<<<< HEAD
const mongooseHidden = require('mongoose-hidden')()
=======

const lockSchema = new Schema({
  isTaken: Boolean,
  user: Object,
  arrival: Date
})
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

const clubSchema = new Schema(
  {
    clubName: String,
    clubId: Number,
    motto: String,
    photoUrl: [String],
    gymArea: Number,
    showersCount: Number,
    lockersCount: Number,
    clubArea: Number,
    trainersCount: Number,
    cardioTrainersCount: Number,
    tittleText: String,
    descriptionText: String,
    address: String,
    weekendBusinessHours: String,
    workdaysBusinessHours: String,
    contactEmail: String,
    city: String,
    map: String,
    contactPhone: String,
<<<<<<< HEAD
    visiters: [Object]
=======
    locks: {male: [lockSchema], female: [lockSchema]},
    lockScheme: {male: [[Number]], female: [[Number]]}
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

<<<<<<< HEAD
clubSchema.plugin(mongooseHidden)
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
clubSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Clubs', clubSchema)
