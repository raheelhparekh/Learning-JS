// http://api.weatherapi.com/v1/current.json?key=c0de9e402b42456f98b121226242012&q=London&aqi=no

const input = document.getElementById('input');
const button = document.getElementById('btn');

const currentLocation = document.getElementById('city-name');
const temperature = document.getElementById('city-temp');
const time = document.getElementById('city-time');

async function getData(cityName){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c0de9e402b42456f98b121226242012&q=${cityName}&aqi=no`);

    if(!response.ok){
        throw new Error(`Cannot Find Data`);
    }

    return await response.json();
}

button.addEventListener("click", async() => {

    const value= input.value
    const result= await getData(value);
    console.log(result);
    
    currentLocation.innerHTML = `Location: ${result.location.name}, ${result.location.country}`;
    temperature.innerHTML = `Temperature: ${result.current.temp_c}°C`;
    time.innerHTML = `Local Time: ${result.location.localtime}`;
    
})