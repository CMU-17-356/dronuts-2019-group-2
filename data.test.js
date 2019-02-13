
var data = require('./dataSchema.js');


describe('Test donut', () => {

  it('Valid donut', () => {
    const result = data.Joi.validate({

    donutID: 101,
	flavor: 'glazed',
	price: 4.45,
	numAvailable: 6,
	picture: 'https://dronuts.co/img/glazed.png',
	description: 'A classic glazed donut'
	}, data.donut);
    expect(result.error).toBe(null);
  });

  it('Invalid donut: bad price', () => {
    const result = data.Joi.validate({

    donutID: 101,
	flavor: 'glazed',
	price: -1,
	numAvailable: 6,
	picture: 'https://dronuts.co/img/glazed.png',
	description: 'A classic glazed donut'
	}, data.donut);
    expect(result.error).not.toBe(null);
  });
});


describe('Test Order', () => {

  it('Order of 1 donut', () => {
    const result = data.Joi.validate({

    orderID: 101121,
    date: 1550011146,
	items: [101],
    paymentToken: "187e6faaefac17863",
	customer: 41401899,
	paid: true,
	status: 'queued',
	deliverylocation: [40.400600,-80.102951]
	}, data.order);
    expect(result.error).toBe(null);
  });

  it('Order of 3 donuts', () => {
    const result = data.Joi.validate({

    orderID: 101121,
    date: 1550011146,
	items: [101, 102, 104],
    paymentToken: "187e6faaefac17863",
	customer: 41401899,
	paid: true,
	status: 'queued',
	deliverylocation: [40.400600,-80.102951]
	}, data.order);
    expect(result.error).toBe(null);
  });
});


describe('Test customer', () => {

  it('Valid customer', () => {
    const result = data.Joi.validate({ 
    	customerID: 41401899,
		name: "John Smith",
		email: "jsmith090@gmail.com",
		password: "42728ff2118430bdff5f9a189e0034ec",
		phonenumber: "2125550123",
		savedlocation: [40.400600,-80.102951],
		paymentToken: "187e6faaefac17863",
		orderHistory: [101121, 102214],
		favorites: [101, 104]
		}, data.customer);
    expect(result.error).toBe(null);
  });


  it('Invalid customer: invalid phonenumber', () => {
    const result = data.Joi.validate({ 
		customerID: 41401899,
		name: "John Smith",
		email: "jsmith090@gmail.com",
		password: "42728ff2118430bdff5f9a189e0034ec",
		phonenumber: "5550102",
		savedlocation: [40.400600,-80.102951],
		paymentToken: "187e6faaefac17863",
		orderHistory: [101121, 102214],
		favorites: [101, 104]

		}, data.customer);
    expect(result.error).not.toBe(null);
  });

});

describe('Test Drone', () => {

  it('Basic valid drone w/o deliveries', () => {
    const result = data.Joi.validate({ 
    	droneID: 18,
		location: [40.400600,-80.102951],
		batteryLevel: 49.2,
		status: 'charging'
    }, data.drone);
    expect(result.error).toBe(null);
  });

 
  it('Invalid drone: invalid status', () => {
const result = data.Joi.validate({ 
    	droneID: 18,
		location: [40.400600,-80.102951],
		batteryLevel: 49.2,
		status: 'ERROR'
    }, data.drone);
	expect(result.error).not.toBe(null);
  });

});