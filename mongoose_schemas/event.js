import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    title         : String,
    description   : String,
    organiser     : String,
    startDate     : Date,
    endDate       : Date,
    bannerImage   : String,
    location      : String,
    category      : String,
    address       : {
                      name   : String,
                      street : String,
                      city   : String,
                      state  : String,
                      zip    : Number
                    },
    plans         : [{
                      name   : String,
                      cost   : Number
                    }]
  });

const eventinfo = mongoose.model('events', userSchema);

export default eventinfo;