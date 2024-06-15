const cityInput = document.querySelector('#srchbttn');
const cityName = document.querySelector('#searchCity');

const cityList = [];

function getCurrentFormattedDate() {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
  
    return formattedDate;
  }
  const currentDateFormatted = getCurrentFormattedDate();

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

// Search for a city button function - adds new cities to the searched cities list and stores them in local storage
cityInput.addEventListener('click', function(event) {
    event.preventDefault();
    const cityValue = cityName.value;
    if(cityValue === '') {
        alert('Please enter a city name');
    } else {
    cityList.push(cityValue);
    localStorage.setItem('City', JSON.stringify(cityList));
    const cityButtonList = document.getElementById('cityButtons');
    const bttn = document.createElement('button');
    bttn.classList.add('city');
    bttn.innerHTML = cityValue;
    cityButtonList.appendChild(bttn);
    cityName.value = "";
    const dataExist = document.getElementById('weatherDisplay');
    dataExist.innerHTML = '';
    const apiKey = 'f63ca6bf62c5c8783f6c0a4d9033f7ec';
    const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${apiKey}`;
    
    fetch(geoCode)
    .then(function(res) {
        console.log(res);
        return res.json();
    })
    .then(function(data) {
        const [{lat, lon}] = data;
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        fetch(apiUrl)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            const {current: {temp, humidity, wind_speed}, } = data;
            console.log(temp)

            const cityTitle = document.getElementById('weatherDisplay');
            const cityDisplay = document.createElement('h2');
            const cityTemp = document.createElement('p');
            const cityWind = document.createElement('p');
            const cityHum = document.createElement('p');
            cityDisplay.innerHTML = `${cityValue} ${currentDateFormatted}`;
            cityTemp.innerHTML = `Temp: ${Math.round((temp - 273.15)*1.8+32)}\u00B0C`;
            cityWind.innerHTML = `Wind: ${wind_speed} mph`;
            cityHum.innerHTML = `Humidity: ${humidity}%`;
            cityTitle.appendChild(cityDisplay);
            cityTitle.appendChild(cityTemp);
            cityTitle.appendChild(cityWind);
            cityTitle.appendChild(cityHum);

        });
    });
}});


// API call - makes city list buttons clickable
const preCity = document.getElementById('cityButtons');
const apiKey = 'f63ca6bf62c5c8783f6c0a4d9033f7ec';
const cityNameInput = cityName.value;
// const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=84.5555&lon=42.7325&appid=${apiKey}`;
// const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${apiKey}`;


preCity.addEventListener('click', function(preCity) {
    // event.preventDefault();
    const dataExist = document.getElementById('weatherDisplay');
    dataExist.innerHTML = '';
    const cityValue = preCity.target.textContent;
    console.log('City:', cityValue);
    const apiKey = 'f63ca6bf62c5c8783f6c0a4d9033f7ec';
    const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${apiKey}`;
    
    fetch(geoCode)
    .then(function(res) {
        console.log(res);
        return res.json();
    })
    .then(function(data) {
        const [{lat, lon}] = data;
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        fetch(apiUrl)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            const {current: {temp, humidity, dt, wind_speed}, } = data;
            console.log(temp)

            const cityTitle = document.getElementById('weatherDisplay');
            const cityDisplay = document.createElement('h2');
            const cityTemp = document.createElement('p');
            const cityWind = document.createElement('p');
            const cityHum = document.createElement('p');
            cityDisplay.innerHTML = `${cityValue} ${currentDateFormatted}`;
            cityTemp.innerHTML = `Temp: ${Math.round((temp - 273.15)*1.8+32)}\u00B0C`;
            cityWind.innerHTML = `Wind: ${wind_speed} mph`;
            cityHum.innerHTML = `Humidity: ${humidity}%`;
            cityTitle.appendChild(cityDisplay);
            cityTitle.appendChild(cityTemp);
            cityTitle.appendChild(cityWind);
            cityTitle.appendChild(cityHum);

        });
    });
});