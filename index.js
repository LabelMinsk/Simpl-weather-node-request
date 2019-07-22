const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requests/weather.request');
const app = express();
// 38e2ad058336ba04b4400c4d2d5a0951

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (reg,res)=>{
  res.render('index',{weather: null, error:null});
});

app.post('/',async(req, res)=>{
  const {city} = req.body;
 // console.log(city);

  const {weather , error} = await weatherRequest(city);
  res.render('index', {weather,error})
  
  res.render('index');
});
app.listen(3000,()=>{
  console.log(`Server has started on port 3000...`)
});