const Joi = require('joi');

test('trivial test', () => {
  expect(3).toBe(3);
});

const droneData = Joi.object({
		droneID: Joi.number().integer().positive().required(),
		location: Joi.array().items( Joi.number() ).length(2), // last known location of the drone in coordinates
		batteryLevel: Joi.number().precision(1).min(0).max(100), // battery level of drone 0.0-100.0
		status: Joi.string().valid('charging', 'delivering', 'returning', 'ready', 'discharged', 'broken')
})

const donutData = Joi.object({

	donutID: Joi.number().integer().positive().required(),
	flavor: Joi.string(), //donut's flavor
	price: Joi.number().positive().precision(2), //donut's price, two decimals
	numAvailable: Joi.number().integer().positive(), // how many of these donuts are available in inventory
	picture: Joi.string().uri(), // link to picture of the donut
	description: Joi.string() // description of the donut
})

const customerData = Joi.object({

	customerID: Joi.number().integer().positive().required(),
	name: Joi.string().min(2).max(30), //Customer's name (first last)
	email: Joi.string().email().required(), //Customer's contact email
	password: Joi.string(), // hashed, salted password
	phonenumber: Joi.string().regex(/[0-9]{10}$/), // Customer's contact phone number, no - or () characters
	savedlocation: Joi.array().items( Joi.number() ).length(2), // Customer's saved delivery location
	paymentToken: Joi.string(), //payment token from Commerce Friend
	orderHistory: Joi.array().items( Joi.number().integer() ), //array of orderIDs 
	favorites: Joi.array().items( Joi.number().integer() ) //array of donutIDs



})

const orderData = Joi.object({

	orderID: Joi.number().integer().positive().required(),
	date: Joi.date().timestamp('unix'),  //date and time in unix timestamp format
	customer: Joi.number().integer().positive(), //customerID
	items: Joi.array().items( Joi.number().integer() ).required(), //array of donutIDs
	paymentToken: Joi.string(), //payment token from Commerce Friend
	paid: Joi.boolean(), //true if order has been paid for, false otherwise
	status: Joi.string().valid('pending-payment','queued', 'en-route', 'delivered', 'failed'), //order status
	deliverylocation: Joi.array().items( Joi.number() ).length(2).required() //location for delivery (coordinates)


})

module.exports = {
	donut: donutData,
	drone: droneData,
	customer: customerData,
	order: orderData,
	Joi: Joi
}

