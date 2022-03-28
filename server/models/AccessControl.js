const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose

const accessControlSchema = new Schema(
  {
    clubId: Number,
    turnStileType: String,
    turnStileId: Number
  },
  { timestamps: { createdAt: 'created_at', updateAt: 'update_at' } }
)

accessControlSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('AccessControls', accessControlSchema)
