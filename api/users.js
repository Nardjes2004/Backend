import { Router } from 'express'
import { ordersCollections, usersCollection } from '../models/index.js'
import mongoose from 'mongoose';
import products from './products.js';
const ObjectId = mongoose.Types.ObjectId;


export default () => {
    let router = Router()

    //Creating a new user
    //We are going to receive data about user (In the body of the request)
    // /api/users

    //  /api/users
    router.post('/', async (req, res) => {
        const body = req.body
        console.log(body)
        // !body.username || !body.age || !body.email
        if (body.username && body.age && body.email) {
            const user = await usersCollection.create(body)
            if (user) {
                res.send({ success: true, message: "User created successfully", user: user })
            } else {
                res.send({ success: false, message: "Try again" })
            }
        } else {
            res.send({ success: false, message: 'Please send user information' })
        }
    })


    //Update a user
    router.put('/:id', async (req, res) => {
        const { id } = req.params
        const body = req.body
        // const {username, age, email} = req.body

        // (filter, data)
        const newUpdate = await usersCollection.updateOne({ _id: id }, { username: body.username, email: body.email, age: body.age })
        if (newUpdate) {
            res.send({ success: true, user: newUpdate })
        } else {
            res.send({ success: false, message: 'Server Error' })
        }
    })

    router.put('/update_many/:username', async (req, res) => {
        const body = req.body
        const { username } = req.params
        const newUpdate = await usersCollection.updateMany({ username: { $regex: username } }, body)
        if (newUpdate) {
            res.send({ success: true, user: newUpdate })
        } else {
            res.send({ success: false, message: 'Server Error' })
        }
    })



    router.get('/:id/orders', async (req, res) => {
        
        const { id } = req.params
        const orders = await ordersCollections.find({ user:id}).populate("products.product_id")

        if (orders.length > 0) {
            res.send({ success: true, response: orders });
        } else {
            res.send({ success: false, message: "No orders found for this user" });
        }
    
    })


    //8. Update User's Address
    router.put('/address/:id', async (req, res) => {
        try{
        const updates = req.body;
        if(updates){
            const{street,city,zipcode} = updates
            console.log(req.body)
            if(zipcode && zipcode.length>0){
                
                const user = await usersCollection.findByIdAndUpdate(req.params.id, {address: updates}, {returnDocument:'after'});
                if(user){
                    res.send({
                        success : true,
                        message : user
                    })
                }else{
                    res.send({
                        success:false,
                        message : "error"
                    })
                }
            }else{
                throw updates
            }
        }
        }catch(e){
            res.send({
                message : e
            })
        }
    });
    return router

}
