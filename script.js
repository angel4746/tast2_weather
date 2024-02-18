// Your ACCUWEATHER API key
const apiKey = 'API_KEY';
async function fetchWeather() {
  const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/1234?apikey=${apiKey}&details=true`);
  const data = await response.json();
  return data[0];
}
async function displayWeather() {
  try {
    const weatherData = await fetchWeather();
    const temperature = weatherData.Temperature.Imperial.Value;
    const weatherText = weatherData.WeatherText;
    document.getElementById('weather').innerHTML = `Current weather: ${weatherText}, Temperature: ${temperature}&deg;F`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather').innerHTML = 'Error fetching weather data';
  }
}

window.onload = displayWeather;
