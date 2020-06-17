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

    locService.getPosition()//here position loaded //here user default location
        .then(pos => {

            mapService.initMap(pos.coords.latitude,pos.coords.longitude)

            console.log('User position is:', pos.coords);
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);//where press button
    
    
})


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


