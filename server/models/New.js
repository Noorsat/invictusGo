const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose
const mongooseHidden = require('mongoose-hidden')()

const newSchema = new Schema(
  {
    tittle: String,
    text: String,
    photoUrl: String,
    to: [Object],
    html: String
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

newSchema.plugin(mongooseHidden)
newSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('New', newSchema)
