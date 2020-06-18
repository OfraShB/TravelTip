export const weatherService = {
    getWeather
}


export function getWeather(pos){

    // const API_KEY = '5d7b69b264e0c8c88069239a73ea828e';

    const API_KEY = '9d323c46ec3bdccb8da5565d309e6b0e';
    
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`)

        .then(res => res.json())

}