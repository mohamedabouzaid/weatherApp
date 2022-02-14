
const geocoding=require('./utils/geocoging');
const forecast=require('./utils/forcast')
var address=process.argv[2];
if(!address){
  console.log("PLZ enter location");
}
else{
geocoding(address, (error, {latitude,longitude,place}={}) => {
 if(error){
   return console.log(error);
 }
 
  forecast(latitude,longitude,(error, forecastData) => {
    if(error){
      return console.log(error);
    }
    console.log("location", place);
    console.log(forecastData);
  });
});
}