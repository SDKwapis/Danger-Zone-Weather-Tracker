const cityInput = document.querySelector('#srchbttn');
const cityName = document.querySelector('#searchCity');

const cityList = [];

cityInput.addEventListener('click', function(event) {
    event.preventDefault();
    const cityValue = cityName.value;
    cityList.push(cityValue);
    localStorage.setItem('City', JSON.stringify(cityList));
});
