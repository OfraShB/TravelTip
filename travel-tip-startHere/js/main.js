const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');

console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    // mapService.initMap()
    // .then(() => {

    //     mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
    // })
    // .catch(console.log('INIT MAP ERROR'));

    //         mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
    //     })
    //     .catch(console.log('INIT MAP ERROR'));
    locService.getPosition()//here position loaded //here user default location

        .then(pos => {
            mapService.initMap(pos.coords.latitude, pos.coords.longitude)



            console.log('User position is:', pos.coords);

            mapService.getAddress(pos)
                .then(add => {
                    var elaAdd = document.querySelector('h3')
                    // console.log(mapService.getAddress())
                    elaAdd.innerHTML = add.results[0].formatted_address
                    console.log('add ', add)
                })



        })
        .catch(err => {
            console.log('err!!!', err);
        })

    // mapService.getAddress(pos)
    //     .then(add => {
    //         var elaAdd = document.querySelector('h3')
    //         // console.log(mapService.getAddress())
    //         elaAdd.innerHTML = add.results[0].formatted_address
    //             console.log('add ', add)
    //     })


}

document.querySelector('.btn').addEventListener('click', (ev) => {

    locService.getPosition()//here position loaded //here user default location

        .then(pos => {
            mapService.panTo(pos.coords.latitude, pos.coords.longitude);//where press button
        })

    // console.log('Aha!', ev.target);
    // mapService.panTo(35.6895, 139.6917);//where press button


})

document.querySelector('.copy').addEventListener('click', (ev) => {

    var dummy = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    console.log(text)
    console.log(urlParams)

})









// function initmap(){
// var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// var mapOptions = {
//   zoom: 4,
//   center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// var marker = new google.maps.Marker({
//     position: myLatlng,
//     map:map,
//     title:"Hello World!"
// });

// // To add the marker to the map, call setMap();
// marker.setMap(map);




// function renderAddress(){

//     mapService.getAddress()
//     .then(add =>{
//         console.log('add ',add)
//     })

    // var add = document.querySelector('h3')
    // console.log(mapService.getAddress())
    // add.innerHTML = 









////to get api with axios
// var prm = axios.get('https://yesno.wtf/api')
// console.log('PRM', prm);

//get with fetch
// fetch('http://www.filltext.com/?rows=10&city={city}&population={numberRange|1000,7000}')
//     .then((res) => { return res.json(); })
//     .catch((err) => { console.log('Had issues1:', err); return ['Tel Aviv', 'Tokyo'] })
//     .then((cities) => { console.log('Cities:', cities); return cities.length })
//     .then((x) => { console.log('x:', x); })
//     .catch((err) => { console.log('Had issues2:', err) })



// function onGoAxios() {
//     var prmAns = getAnsWithAxios()
//     prmAns.then((ans)=>{
//         console.log('ANS:', ans);
//         renderAns(ans)
//     })
// }
// var prm = axios.get('https://yesno.wtf/api')
// console.log('PRM', prm);


// prm.then(res => {
//     console.log('AXIOS RES:', res);
// })
// prm.catch(err => {
//     console.log('AXIOS ERR:', err);
// })
// prm.finally(() => {
//     console.log('DONE WITH AXIOS');
// })

// fetch('http://www.filltext.com/?rows=10&city={city}&population={numberRange|1000,7000}')
//     .then((res) => { return res.json(); })
//     .catch((err) => { console.log('Had issues1:', err); return ['Tel Aviv', 'Tokyo'] })
//     .then((cities) => { console.log('Cities:', cities); return cities.length })
//     .then((x) => { console.log('x:', x); })
//     .catch((err) => { console.log('Had issues2:', err) })


