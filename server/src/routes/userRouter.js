import express from 'express';
import User from '../models/userModel';
const userRouter = express.Router();
userRouter.route('/')
    .get((req, res) => {
        User.find({}, (err, users) => {
            console.log(users)
            res.json(users)
        })
    })
    .post((req, res) => {
        let user = new User(req.body);
        user.save();
        res.status(201).send(user) 
    })

// Middleware 
userRouter.use('/:userId', (req, res, next)=>{
    User.findById( req.params.userId, (err,user)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.user = user;
            next()
        }
    })

})
userRouter.route('/:userId')
    .get((req, res) => {
        res.json(req.user)
    }) // end get Users/:userId 
    .put((req,res) => {
        req.user.username = req.body.username;
        req.user.password = req.body.password;
        req.user.salt = req.body.salt;
        req.user.hash = req.body.hash;
        req.user.save()
        res.json(req.user)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.user[p] = req.body[p]
        }
        req.user.save()
        res.json(req.user)
    })//patch
    .delete((req,res)=>{
        req.user.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete
	 
export default userRouter;