const cityInput = document.querySelector('#srchbttn');
const cityName = document.querySelector('#searchCity');


const cityList = [];

cityInput.addEventListener('click', function(event) {
    event.preventDefault();
    const cityValue = cityName.value;
    cityList.push(cityValue);
    localStorage.setItem('City', JSON.stringify(cityList));
    const cityButtonList = document.getElementById('cityButtons');
    const bttn = document.createElement('button');
    bttn.classList.add('city');
    bttn.innerHTML = cityValue;
    cityButtonList.appendChild(bttn);
    cityName.value = "";
});

document.addEventListener('DOMContentLoaded', function() {
    const myCities = JSON.parse(localStorage.getItem('cityList'));
    for(i = 0; i < myCities.length; i++) {
        const cityButtonList = document.getElementById('cityButtons');
        const bttn = document.createElement('button');
        bttn.classList.add('city');
        bttn.setAttribute('id', cityButtons);
        bttn.innerHTML = myCities[i];
        cityButtonList.appendChild(bttn);
    }
});