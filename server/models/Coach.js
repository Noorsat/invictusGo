const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose
const mongooseHidden = require('mongoose-hidden')()

const coachSchema = new Schema(
  {
    fullName: String,
<<<<<<< HEAD
    club: String,
=======
    clubId: Number,
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    photoUrl: String,
    instagramLink: String,
    achievements: [String],
    experience: Number,
    certificates: [String],
    description: String,
    expoPushToken: Object
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

coachSchema.plugin(mongooseHidden)
coachSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Coach', coachSchema)
