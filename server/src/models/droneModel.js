import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const droneModel = new Schema({
	lat: {type: String},
	long: {type: String},
	battery: { type: Double },
	status: { type: String }
});
export default mongoose.model('drones', droneModel)