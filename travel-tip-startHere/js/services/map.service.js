
export const mapService = {
    initMap,
    addMarker,
    panTo
}


var map;

latitude: 31.046051
longitude: 34.851611999999996


export function initMap(lat, lng) {//add user location      
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            console.log('Map!', map);
        })
}



function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Hello World!'
    });
    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    map.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyA9yzuDEb33MyDyYBG-eTzdcVfqlj2e7Bs'; //TODO: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}

// to translate geo location
https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


// var elWeatherApi = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`
function _connectWeatherApi() {
    if (window.weather) return Promise.resolve()
    const WEATHER_API_KEY = 'ef70e2b556f793731a7568cf375945be'; //TODO: Enter your API Key
    var elWeaterApi = document.createElement('script');
    elWeatherApi.src = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`
    // elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elWeatherApi.async = true;
    document.body.append(elWeatherApi);
    return new Promise((resolve, reject) => {
        elWeatherApi.onload = resolve;
        elWeatherApi.onerror = () => reject('Google script failed to load')
    })
}
