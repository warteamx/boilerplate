import mongoose from 'mongoose';

import User from './user';
import Message from './message';

//mongodb://mongodb:27017/api
const connectDb = () => {
  return mongoose.connect("mongodb+srv://martinrg33:4TEXNXcuSb6G5TQ@cluster-boilerplate.towaf.mongodb.net/sample_training?retryWrites=true&w=majority",
    {useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true,
      keepAlive: true
    });
};
 
const models = { User, Message };

export { connectDb };

export default models