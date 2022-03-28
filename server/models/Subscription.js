const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose
const mongooseHidden = require('mongoose-hidden')()

const subscriptionSchema = new Schema(
  {
    type: String,
    firstMonth: Number,
    nextMonths: Number,
    bonus: [String],
    advantages: [String]
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

subscriptionSchema.plugin(mongooseHidden)
subscriptionSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Subscriptions', subscriptionSchema)
