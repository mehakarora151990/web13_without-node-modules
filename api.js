const route = require('express').Router()

const db = require('../db')
// this route is on the api path

route.get('/persons/', (req, res) =>{
    // send all persons in form of array
    db.getallpersons()
    .then((persons)=> res.send(persons))
    .catch((err)=> res.send({error:err}))

})

route.post('/persons/', (req,res) =>{
    //add the new persons (details are in the body)
    db.addnewpersons(req.body.name, req.body.age, req.body.city)
    .then(()=>res.redirect('/api/'))    // redirect to get all persons
    .catch((err) => res.send({error:err}))

})

exports = module.exports ={
    route
}