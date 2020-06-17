export const locService = {
    getLocs: getLocs,
    getPosition: getPosition
}

// navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };

// getPosition().coords.latitude
// getPosition().coords.longitude


var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

//here load user positions
function getPosition() {
    console.log('Getting Pos');

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
        // console.log (navigator.geolocation.getCurrentPosition(resolve, reject))
    })


}











