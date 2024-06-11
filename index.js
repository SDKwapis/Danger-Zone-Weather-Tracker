const cityInput = document.querySelector('#srchbttn');
const cityName = document.querySelector('#searchCity');


const cityList = [];

// pulls the searched cities from local storage and displays them in the searched cities list
document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();
    const myCities = JSON.parse(localStorage.getItem('City'));
    for(let i = 0; i < myCities.length; i++) {
        const cityButtonList = document.getElementById('cityButtons');
        const bttn = document.createElement('button');
        bttn.classList.add('city');
        bttn.setAttribute('id', 'cityButtons');
        bttn.innerHTML = `${myCities[i]}`;
        cityButtonList.appendChild(bttn);
    }
});

// adds new cities to the searched cities list and stores them in local storage
cityInput.addEventListener('click', function(event) {
    event.preventDefault();
    const cityValue = cityName.value;
    if(cityValue === '') {
        console.log('No city entered');
    } else {
    cityList.push(cityValue);
    localStorage.setItem('City', JSON.stringify(cityList));
    const cityButtonList = document.getElementById('cityButtons');
    const bttn = document.createElement('button');
    bttn.classList.add('city');
    bttn.innerHTML = cityValue;
    cityButtonList.appendChild(bttn);
    cityName.value = "";
    }
});

// API call
const apiKey = 'f63ca6bf62c5c8783f6c0a4d9033f7ec';
const cityNameInput = cityName.value;
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=84.5555&lon=42.7325&appid=${apiKey}`;
const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=Detroit&limit=1&appid=${apiKey}`;

fetch(apiUrl)
    .then(function(res) {
        console.log(res);
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });


fetch(geoCode)
    .then(function(res) {
        console.log(res);
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });
   

// uses geocode to fetch lat/lon from api based on city name
// cityInput.addEventListener('click', function() {
//     const cityNameInput = cityName.value;
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityNameInput}&limit=1&appid=bd421c12081b8c5b5cfd4c992f4519f5`);
//     console.log(response)
// });


