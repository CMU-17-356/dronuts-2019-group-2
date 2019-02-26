import express from 'express';
import Drone from '../models/droneModel';
const droneRouter = express.Router();
droneRouter.route('/')
    .get((req, res) => {
        Drone.find({}, (err, drones) => {
            console.log(drones)
            res.json(drones)
        })
    })
    .post((req, res) => {
        let drone = new Drone(req.body);
        drone.save();
        res.status(201).send(drone) 
    })

// Middleware 
droneRouter.use('/:droneId', (req, res, next)=>{
    Drone.findById( req.params.droneId, (err,drone)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.drone = drone;
            next()
        }
    })

})
droneRouter.route('/:droneId')
    .get((req, res) => {
        res.json(req.drone)
    }) // end get Drones/:droneId 
    .put((req,res) => {
        req.drone.long = req.body.long;
        req.drone.lat = req.body.lat;
        req.drone.battery = req.body.batttery;
        req.drone.status = req.body.status;
        req.drone.save()
        res.json(req.drone)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.drone[p] = req.body[p]
        }
        req.drone.save()
        res.json(req.drone)
    })//patch
    .delete((req,res)=>{
        req.drone.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete
	 
export default droneRouter;