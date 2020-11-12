const request = require('request')


const geocode = (address , callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?&access_token=pk.eyJ1IjoidGFuamlybzI1NSIsImEiOiJja2JiNmFtamEwMWQyMnVwMmQ0eHFnNTZ3In0.tXCdEGAnrKZfe8IBQtgaaw&limit=1'
 request({url: url, json: true},(error,response)=>{
        if(error){
            callback('Unable to connect to Loaction Services!',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find Loaction.Try another search')
        }else{
            //   const latitude = response.body.features[0].center[0]
            //   const longituede= response.body.features[0].center[1]
            callback(undefined,{
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
            })
        }
})
}
module.exports = geocode