//98294f83098f0671ddce2313aee7b16c
const request = require('request')
var getWeather = (latitude, longtitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/98294f83098f0671ddce2313aee7b16c/${latitude},${longtitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
            // console.log(body.currently.temperature)
        } else {
            callback('Unable to fetch weather')
            // console.log('Unable to fetch weather.')
        }
    })
}

module.exports.getWeather = getWeather