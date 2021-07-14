
import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Test from './test'

//mongodb://mongodb:27017/api
//process.env.PORT
//process.env.MONGODB
//mongodb+srv://martinrg33:4TEXNXcuSb6G5TQ@cluster-boilerplate.towaf.mongodb.net/sample_training?retryWrites=true&w=majority

// "mongodb+srv://nap-admin:gzRpnLItCZaAmiix@cluster0.owcgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 


const connectDb = () => {
  return mongoose.connect(  process.env.MONGO_DRIVER || "mongodb+srv://nap-admin:gzRpnLItCZaAmiix@cluster0.owcgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,
    {useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true,
      keepAlive: true
    });
};
  
const models = { User, Message, Test };

export { connectDb };

export default models