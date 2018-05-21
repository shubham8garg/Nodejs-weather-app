let request = require('request');
const argv = require('yargs').argv;

let apiKey = '780cfb5cff3d2fa81ad85d7b34c65c66';
let city = argv.c || 'boston';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} ^C degrees in ${weather.name}!`;
	console.log(message);
  }
});