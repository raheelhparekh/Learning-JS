const button = document.getElementById("btn");
const display = document.getElementById("display");

// getting weather via latitude and longitude from weather api
async function getData(latitude, longitude) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c0de9e402b42456f98b121226242012&q=${latitude},${longitude}&aqi=no`
  );

  if (!response.ok) {
    throw new Error(`Cannot Find Data`);
  }

  return await response.json();
}
async function getLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );

  console.log(result);

  display.innerHTML = `Location: ${result.location.name}, ${result.location.country}, Temperature: ${result.current.temp_c}°C, Local Time: ${result.location.localtime}, Weather: ${result.current.condition.text}`;
}
function handleError(error) {
  console.log("Error: Could not get location, Please allow location access");
}

button.addEventListener("click", async () => {
  // navigator.geolocation.getCurrentPosition(ifLocationfound-> get location, ifLocationNotFound ---> handleError);

  navigator.geolocation.getCurrentPosition(getLocation, handleError);
});
