import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const orderModel = new Schema({
	date: {type: Timestamp},
	items: [Donut],
	paid: {type: Boolean},
	status: {type: String},
	lat: {type: String},
	long: {type: String},


});
export default mongoose.model('orders', orderModel)


