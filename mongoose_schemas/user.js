import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id : String,
    email : String,
    password : String,
  });

const userinfo = mongoose.model('users', userSchema);

export default userinfo;