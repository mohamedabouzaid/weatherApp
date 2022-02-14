const request=require('postman-request')
const url="http://api.weatherstack.com/current?access_key=cfaf0c2804129a32e2de34bad2aee021&query=New%20York&units=f"

const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJvdXphaWQxIiwiYSI6ImNremxueDRuaTE3YmcybmxsZnVzNnR0b2EifQ.imSdT_lql9jCx6oZQ9FDUQ&limit=1'
/*requset({url:url,json:true},(error,response)=>{
  console.log(response.body.current.weather_descriptions[0]+'.It is cruelty '+ response.body.current.temperature+' degree out . There is a '+ response.body.current.feelslike+' % chance of rain')
  //console.log(response.body.current.temperature);

})*/

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
    console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.')
    } else {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
    }
    
    })
