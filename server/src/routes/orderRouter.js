import express from 'express';
import Order from '../models/orderModel';
const orderRouter = express.Router();
orderRouter.route('/')
    .get((req, res) => {
        Order.find({}, (err, orders) => {
            console.log(orders)
            res.json(orders)
        })
    })
    .post((req, res) => {
        let order = new Order(req.body);
        order.save();
        res.status(201).send(order)
    })

// Middleware
orderRouter.use('/:orderId', (req, res, next)=>{
    Order.findById( req.params.orderId, (err,order)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.order = order;
            next()
        }
    })

})
orderRouter.route('/:orderId')
    .get((req, res) => {
        res.json(req.order)
    }) // end get Orders/:orderId
    .put((req,res) => {
        req.order.date = req.body.date;
        req.order.items = req.body.items;
        req.order.paid = req.body.paid;
        req.order.status = req.body.status;
        req.order.lat = req.body.lat;
        req.order.long = req.body.long;
        req.order.address = req.body.address;
        req.order.save()
        res.json(req.order)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.order[p] = req.body[p]
        }
        req.order.save()
        res.json(req.order)
    })//patch
    .delete((req,res)=>{
        req.order.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete

export default orderRouter;
