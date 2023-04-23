import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { allevents, event, newevent } from './functions/event.js';
import { Createuser, Updateuser } from './functions/user.js';

const app = express();
const Port = 9000;
dotenv.config()

// const corsOptions = { origin:'http://localhost:3000' , credentials:true , optionSuccessStatus:200 }
const corsOptions = { origin:'https://all-events.vercel.app' , credentials:true , optionSuccessStatus:200 }

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

async function main() {
  try{
    await mongoose.connect(process.env.MONGOOSE_PATH,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'AllEvents',
    });
  }
  catch(error){
    console.log(error.message);
  }
}
main();

//user
app.post('/user', Createuser )
app.get('/user', Updateuser )

// events
app.get('/events', allevents)
app.get('/event/:id', event)
app.post('/newevent' , newevent)


app.listen(Port, () => {
  console.log(`Example app listening on port: http://localhost:${Port}`)
})
