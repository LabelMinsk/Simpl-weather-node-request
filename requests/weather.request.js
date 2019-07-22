const rp = require('request-promise');

module.exports = async function(city = ''){
  if(!city){
    throw new Error('Имя города не может быть пустым');
    }
  const KEY = '38e2ad058336ba04b4400c4d2d5a0951';
  const uri = 'http://api.openweathermap.org/data/2.5/weather';

  const options = {
    uri,
    qs:{
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  };
  try{
    const data = await rp(options);
    const celsius = ((data.main.temp - 32) * 5/9).toFixed(0);
    return{
      weather:`${data.name}: ${celsius}`,
      error:null
    }
  } catch(error){
    return{
      weather:null,
      error:error.error.message
    }
  }
};