import mongoose from 'mongoose';
 
const airbnbSchema = new mongoose.Schema({
    listing_url:  String, // String is shorthand for {type: String}
    name: String,
    summary:   String
  });
 

 
const Airbnb = mongoose.model('Airbnb', airbnbSchema);
 
export default Airbnb;