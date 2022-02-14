
const geocoding=require('./utils/geocoging');
const forecast=require('./utils/forcast')
var address=process.argv[2];
if(!address){
  console.log("PLZ enter location");
}
else{
geocoding(address, (error, data) => {
 if(error){
   return console.log(error);
 }
 
  forecast(data.latitude,data.longitude,(error, forecastData) => {
    if(error){
      return console.log(error);
    }
    console.log("location", data.place);
    console.log(forecastData);
  });
});
}