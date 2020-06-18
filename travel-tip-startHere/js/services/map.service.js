
export const mapService = {
    initMap,
    addMarker,
    panTo,
    getAddress
}


var map;

// latitude: 31.046051
// longitude: 34.851611999999996


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

            var marker = new google.maps.Marker({
                position: { lat, lng },
                
                title:"Hello World!"
            }); 
            marker.setMap(map);
            console.log('Map!', map);
        })
}






export function getAddress(pos) {

    const API_KEY = 'AIzaSyA9yzuDEb33MyDyYBG-eTzdcVfqlj2e7Bs';

    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&key=${API_KEY}`)

        .then(res => res.json())

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

// function _connectGeoLocationApi() {
//     if (window.google) return Promise.resolve()
//     var elGeoeApi = document.createElement('script');
//     const API_KEY = 'AIzaSyA9yzuDEb33MyDyYBG-eTzdcVfqlj2e7Bs';
//     elGeoeApi.src = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${API_KEY}`
//     elGoogleApi.async = true;
//     document.body.append(elGoogleApi);

//     return new Promise((resolve, reject) => {
//         elGoogleApi.onload = resolve;
//         elGoogleApi.onerror = () => reject('Google script failed to load')
//     })
// }


//5d7b69b264e0c8c88069239a73ea828e
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}



