import mongoose from 'mongoose';
 
export interface UserDoc extends mongoose.Document {
  characterId: {
    type: string
    required: true

  }
  userId: string
}

const favsSchema = new mongoose.Schema({
    userId:  String, 
    characterId: Array,
  });
 
 
const Favs = mongoose.model<UserDoc>('favs', favsSchema);
 
export default Favs;