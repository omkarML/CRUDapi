const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.get('/', async(req,res) =>{
    try{
            const employees = await Employee.find()
            res.send(employees)
    }catch(err){
        res.send('Error' +  err)
    }
})

router.get('/:id', async(req,res) =>{                               //to fetch single emp with ID
    try{
            const employee = await Employee.findById(req.params.id)
            res.send(employee)
    }catch(err){
        res.send('Error' +  err)
    }
})

router.post('/', async(req,res) =>{
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position
    })

    try{
        const a1 = await  employee.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res) =>{
    try{
        const employee = await Employee.findById(req.params.id)
        employee.name = req.body.name
        const a1 = await employee.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const employee = await Employee.findById(req.params.id)
        employee.name = req.body.name
        const a1 = await employee.remove()
        res.json(a1)
    }catch(err){
        res.send('Error')
    
    }
})


module.exports = router