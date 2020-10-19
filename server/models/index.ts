import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect("mongodb://mongodb:27017/api",
    {useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true,
      keepAlive: true
    });
};
 
const models = { User, Message };

export { connectDb };

export default models