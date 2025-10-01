import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
  },
  isBlock: {
    type: Boolean,
    default: false,
},

});

const User = mongoose.model('User', userSchema);
export default User;