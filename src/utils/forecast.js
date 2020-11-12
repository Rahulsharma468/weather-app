const request = require('request')

const forecast = (latitude,longitude , callback) => {
     const url = 'https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&latitude='+latitude+'&longitude='+longitude+'&oneobservation=true&apiKey=McpzG9H5Fr4H0L_GKgi6XVeaeA1l-Ex3HU5DbPymxpo'
    request({url,json:true},(error,response) =>{
        if(error){
            callback('Unable to connect to Loaction TT',undefined)
        }else if(response.body.error){
            callback('Unable to find Locations.Try another Loaction TT',undefined)
        }else{
            callback(undefined,response.body.observations.location)
        }
    })
}

module.exports = forecast