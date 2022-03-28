const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose

const lockStorySchema = new Schema(
  {
    clubId: Number,
    male: [Number],
    female: [Number]
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

lockStorySchema.plugin(mongoosePaginate)

module.exports = mongoose.model('lockStory', lockStorySchema)
