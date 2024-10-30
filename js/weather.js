// --------------------- Interactivity for the Spooky Weather Tower (spooky-weather.html). --------------------------
// This code fetches data from OpenWeatherMap API and update the HTML (spooky-weather.html) with the current weather and spooky forecast. 


// -------- API KEY & CITY SETUP


// Unique key from OpenWeatherMap to access the weather data. 
const apiKey = 'c26206b1ec01532044d07fd12dd00f5f';

// The selected city I choosen for my weather data. 
const city = "Atlanta";


// -------- FUNCTION TO FETCH WEATHER DATA.


// fetchWeather function is a asynchronous function that requests weather data for the specified city. 
async function fetchWeather() {

    // Utilize "try-catch" to catch errors. 
    try {
        // Send a request to the OpenWeatherAPI using the city and api variable. 
        const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        
        // Set to wait for the API response, before turn into JSON
        const data = await response.json();

        // If request is successful 
        if (response.ok)  {
            // then "displayWeather" function is called with the fetched data to update the weather on the page.
            displayWeather(data);
        } else {
            // Log any error message 
            console.error('Error:', data.message);
        }
        
    } catch (error) {
        // Catch and log any errors in the fetch process.  
        console.error('Fetch error:', error);
    } // end of "try-catch" statements

} // end of "fetchWeather function" 

// ----------- DISPLAY WEATHER IN HTML 

function displayWeather(data) {

    // Get the weather description like "rain", "clear sky", 
    const description = data.weather[0].description;

    // Update the weather-description in HTML with the actual weather description. 
    document.getElementById('weather-description').textContent = `Current Weather in Atlanta: ${description}`;

    // Add a Halloween-themed icons based on the weather
    addSpookyForecast(description);


}

function addSpookyForecast(description) {
    const spookyForecast = document.getElementById('spooky-forecast');
    spookyForecast.innerHTML = ''; // Clear previous icons

    let forecastText = ''; // Variable to hold forecast text with icon

    // Check the weather description and set forecast text with icon
    if (description.includes('rain')) {
        forecastText = '☔️ 👻 Ghosts appear in the rain!';
    } else if (description.includes('clear')) {
        forecastText = '🎃 Pumpkins shine under clear skies!';
    } else if (description.includes('cloud')) {
        forecastText = '☁️ 🦇 Bats fly under cloudy skies!';
    } else if (description.includes('snow')) {
        forecastText = '❄️ 👻 Snow ghosts are about!';
    } else {
        forecastText = '🧛 Spooky vibes are in the air!';
    }

    // Update HTML content with the forecast text wrapped in a spooky-icon span
    spookyForecast.innerHTML = `<span class="spooky-icon">${forecastText}</span>`;

    // Get the newly added icon and add the fly-in class after a slight delay
    const iconElement = spookyForecast.querySelector('.spooky-icon');
    setTimeout(() => {
        if (iconElement) {
            iconElement.classList.add('fly-in');
        }
    }, 100); // Delay for animation
}



document.addEventListener('DOMContentLoaded', fetchWeather);

// Selecting the "back-door" element. 
const backDoor = document.getElementById("back-door");


// Add a event listener on click to the Haunted House main page.   
backDoor.addEventListener("click", () => {

    //Link to the main "Haunted House" page. 
    window.location.href = "../index.html";
    
});