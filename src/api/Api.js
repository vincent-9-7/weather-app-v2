require('dotenv').config();

const mapboxKey = process.env.REACT_APP_MAPBOX_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;
const googleKey = process.env.REACT_APP_GOOGLE_KEY;


export const getLocationApi = (currentCity) =>
    `https://api.mapbox.com/geocoding/v5/mapbox.places`
    +
    `/${currentCity}.json?access_token=${mapboxKey}`;


export const getWeatherApi = (lat,lng) =>
    `https://api.openweathermap.org/data/2.5/`
    +
    `onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts`
        +
    `&appid=${weatherKey}&units=metric`;


export const getGMTApi = (lat,lng) =>
    `https://api.openweathermap.org/data/2.5/weather?`
    +
    `lat=${lat}&lon=${lng}&appid=${weatherKey}`;


export const getTimeApi = (GMT) =>
    `https://worldtimeapi.org/api/timezone/Etc/GMT${GMT}`;

export const getTimeApiGMT0 = () =>
    `https://worldtimeapi.org/api/timezone/Etc/GMT`;


export const getLocationGoogleApi = (currentCity) =>
    `https://maps.googleapis.com/maps/api/geocode/`
    +
    `json?address=${currentCity}&key=${googleKey}`;

// export{
//     getLocationApi,
//     getWeatherApi,
//     getLocationGoogleApi
// }

