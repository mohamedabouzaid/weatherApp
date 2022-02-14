const request = require("postman-request");
const forecast = (latitude, longitude,callback) => {

    

  const url =
    "http://api.weatherstack.com/current?access_key=cfaf0c2804129a32e2de34bad2aee021&query=" +
    latitude +
    "," +
    longitude +
    "&units=f"
    request({ url: url, json: true }, (error, response) => {
        if (error) {
          callback("Unable to connect to location services!");
        } 
        else if(response.body.error){
            callback("Unable to find location. Try another search");
        }
        else {
           /* const weather_descriptions= response.body.current.weather_descriptions[0]
            const temperature= response.body.current.temperature
            const feelslike=response.body.current.feelslike
            callback(undefined,{weather_descriptions,temperature,feelslike})*/
            callback(undefined,response.body.current.weather_descriptions[0]+'.It is cruelty '+ response.body.current.temperature+' degree out . There is a '+ response.body.current.feelslike+' % chance of rain')
        }


})
}
module.exports = forecast;
