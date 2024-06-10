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