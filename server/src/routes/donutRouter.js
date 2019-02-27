import express from 'express';
import Donut from '../models/donutModel';
const donutRouter = express.Router();
donutRouter.route('/')
    .get((req, res) => {
        Donut.find({}, (err, donuts) => {
            res.json(donuts)
        })
    })
    .post((req, res) => {
        let donut = new Donut(req.body);
        donut.save();
        res.status(201).send(donut)
    })

// Middleware
donutRouter.use('/:donutId', (req, res, next)=>{
    Donut.findById( req.params.donutId, (err,donut)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.donut = donut;
            next()
        }
    })

})
donutRouter.route('/:donutId')
    .get((req, res) => {
        res.json(req.donut)
    }) // end get Donuts/:donutId
    .put((req,res) => {
        req.donut.flavor = req.body.flavor;
        req.donut.price = req.body.price;
        req.donut.numAvailable = req.body.numAvailable;
        req.donut.image = req.body.image;
        req.donut.description = req.body.description;
        req.donut.save()
        res.json(req.donut)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.donut[p] = req.body[p]
        }
        req.donut.save()
        res.json(req.donut)
    })//patch
    .delete((req,res)=>{
        req.donut.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete

export default donutRouter;
