import mongoose from 'mongoose';
 
const testSchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    color: String,
    link:   String
  });
 
 
const Airbnb = mongoose.model('Test', testSchema);
 
export default Airbnb;