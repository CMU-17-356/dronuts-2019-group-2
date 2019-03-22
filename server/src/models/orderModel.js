import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderModel = new Schema({
	items: {type: String},
	paid: {type: Boolean},
	status: {type: String},
	lat: {type: String},
	long: {type: String},
	address: {type: String}

});
export default mongoose.model('orders', orderModel)
