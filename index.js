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
     bttn.innerHTML = cityValue;
     bttn.className = 'city';
    cityButtonList.appendChild(bttn);
        cityName.reset();
});