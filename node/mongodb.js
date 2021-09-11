const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
mongoose.connect('mongodb://localhost:27017/demo')
const db = mongoose.connection
db.on('error', () => {
  console.log(error);
})
const memberSchema = mongoose.Schema({

  username: String,
  password: Number,
  mobile: Number,
  email: String,
  nickname: String,
  age: Number,
  gender: {
    type: Number,
    enum: [0, 1, 2]
  },
  money: Number,
  integral: Number,
  cardId: Number,
  last_modified_time: {
    // 上一次登录时间
    type: Date,
    default: Date.now, // Date.now 不加()
  },
}, {
  timestamps: {
    createdAt: "create_time",
    updatedAt: "update_time"
  },
})
memberSchema.plugin(mongoosePaginate)
const Member = mongoose.model('Member', memberSchema, 'member')
// for (let i of getData().data) {
//   Member(i).save()
// }
module.exports = Member