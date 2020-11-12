const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app= express()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

//set paths
const publicdir = path.join(__dirname,'../public')
const viewsdir = path.join(__dirname,'../templates/view')
const partialspath = path.join(__dirname,'../templates/partials')

//initalize paths/setup handdelebars & views engine
app.use(express.static(publicdir))
app.set('views', viewsdir)
hbs.registerPartials(partialspath)


//usable functions
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather Information Site',
        name: 'Rahul'
    })
})
app.get('/about' ,(req,res)=>{
    res.render('about' ,{
        about: 'About Creater of this App',
        name: 'Rahul'
    })
})
app.get('/help' ,(req,res)=>{
    res.render('help' ,{
        title: 'How may i help you?',
        name: 'Rahul'
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            errormessage: 'Please Provide Address'
        })
    }
    geocode(req.query.address ,(error , {latitude , longitude , location} = {})=> {
        if(error){
            return res.send({error})
        }
            // console.log('Error',error)
            // console.log('data',data)
        forecast(latitude,longitude,(error,data1)=>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast: data1,
                    location,
                    address: req.query.address
                })
            })
    })
    // res.send({
    //         forecast: 'it is raining',
    //         location : 'Goa',
    //         address : req.query.address
    // })
})
app.get('/products' ,(req,res)=> {
    if(!req.query.search){
        return res.send({
            error: 'Please provide your search!'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
    
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404 Help',
        name: 'Rahul',
        errormessage: 'Help article not found'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title: '404',
        name: 'Rahul',
        errormessage: '404 Not Found'
    })
})
app.listen(port,()=> {
    console.log('Listening at port:' +port)
})