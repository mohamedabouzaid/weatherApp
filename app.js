const requset=require('postman-request')
const url="http://api.weatherstack.com/current?access_key=cfaf0c2804129a32e2de34bad2aee021&query=New%20York&units=f"
requset({url:url,json:true},(error,response)=>{
  console.log(response.body.current.weather_descriptions[0]+'.It is cruelty '+ response.body.current.temperature+' degree out . There is a '+ response.body.current.feelslike+' % chance of rain')
  //console.log(response.body.current.temperature);

})