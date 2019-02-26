import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const userModel = new Schema({
	username: {type: String},
	password: { type: String },
	hash: {type:String},
	salt: {type: String}
});
export default mongoose.model('users', userModel)


