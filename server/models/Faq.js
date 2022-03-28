const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose
const mongooseHidden = require('mongoose-hidden')()

const faqSchema = new Schema(
  {
    question: String,
    answer: String
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

faqSchema.plugin(mongooseHidden)
faqSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Faq', faqSchema)
