const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const passportLocalMongoose = require('passport-local-mongoose')
const { Schema } = mongoose
const mongooseHidden = require('mongoose-hidden')()
<<<<<<< HEAD

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      index: true
    },
    password: String,
=======
//TODO synchronize data with perfectgym
const userSchema = new Schema(
  {
    phoneNumber: String,
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    fullName: String,
    club: String,
    photoUrl: String,
    clubId: Number,
    memberId: Number,
    startDate: Date,
    endDate: Date,
    subscriptionType: String,
<<<<<<< HEAD
=======
    gender: String,
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    type: String,
    expoPushToken: Object
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

// userSchema.plugin(mongooseHidden)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Users', userSchema)
