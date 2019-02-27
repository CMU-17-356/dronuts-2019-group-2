import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const donutModel = new Schema({
	flavor: {type: String},
	price: {type: Number},
	numAvailable: { type: Number },
	picture: { type: String },
	description: {type: String}
});
export default mongoose.model('donuts', donutModel)



