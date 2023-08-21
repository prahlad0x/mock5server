const express = require('express')
const { AppModel } = require('../models/app.model')

require('dotenv').config()


const appointmentRouter = express.Router()

appointmentRouter.get("/", async(req, res)=>{
    try {
        let alldata = await AppModel.find()
        res.status(200).send({msg : "all data", isOk : true, alldata : alldata})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "something went wrong!", isOk : false, error : error})
    }
})

appointmentRouter.post('/', async(req, res)=>{
    try {
        let newAppointment = new AppModel({...req.body, date : new Date()})
        await newAppointment.save()
        return res.status(201).send({msg : "Appointment Created", isOk : true, appointment : newAppointment})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "something went wrong!", isOk : false, error : error})
    }
})
appointmentRouter.patch('/:id', async(req, res)=>{
    try {
        await  AppModel.findByIdAndUpdate(req.params.id, req.body)
        return res.status(201).send({msg : "Appointment Created", isOk : true, })
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "something went wrong!", isOk : false, error : error})
    }
})


appointmentRouter.delete('/:id', async(req,res)=>{
    try {
        await AppModel.findByIdAndDelete(req.params.id)
        return res.status(202).send({msg :"Appointment Deleted", isOk : true})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "something went wrong!", isOk : false, error : error})
    }
})
appointmentRouter.get('/:id', async(req,res)=>{
    try {
        let data = await AppModel.findById(req.params.id)
        return res.status(202).send({msg :"Appointment ", isOk : true, data : data})
    } catch (error) {
        console.log(error)
        return res.status(401).send({msg : "something went wrong!", isOk : false, error : error})
    }
})
module.exports = {appointmentRouter}