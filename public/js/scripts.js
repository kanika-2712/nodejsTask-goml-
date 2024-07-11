// // Function to fetch the API key from the server
// async function fetchApiKey() {
//     const response = await fetch('/api/key');
//     const data = await response.json();
//     return data.apiKey;
// }

// // Function to fetch the weather data
// async function fetchWeather(latitude, longitude) {
//     const apiKey = await fetchApiKey();
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
    
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
// }

// // Display the weather information
// function displayWeather(weather) {
//     const weatherReport = document.getElementById('weather-report');
//     if (weather && weather.weather && weather.weather[0] && weather.main) {
//         const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
//         weatherReport.innerHTML = `
//             <h3>${weather.name}</h3>
//             <p><img src="${iconUrl}" alt="${weather.weather[0].description}"> ${weather.main.temp}°C</p>
//             <p>${weather.weather[0].description}</p>
//         `;
//     } else {
//         weatherReport.innerHTML = '<p>Unable to retrieve weather information at this time.</p>';
//     }
// }

// // Get the user's location and fetch weather information
// function getLocationAndWeather() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             fetchWeather(latitude, longitude)
//                 .then(displayWeather)
//                 .catch(error => {
//                     console.error('Error fetching weather data:', error);
//                     document.getElementById('weather-report').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
//                 });
//         }, error => {
//             console.error('Error getting geolocation:', error);
//             document.getElementById('weather-report').innerHTML = '<p>Unable to retrieve your location. Please ensure location services are enabled and try again.</p>';
//         });
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//         document.getElementById('weather-report').innerHTML = '<p>Geolocation is not supported by this browser.</p>';
//     }
// }

// // Run the function to get location and weather information when the page loads
// document.addEventListener('DOMContentLoaded', getLocationAndWeather);


//dfghjkl;/=============


// async function fetchApiKey() {
//     const response = await fetch('/api/key');
//     const data = await response.json();
//     return data.apiKey;
// }

// // Function to fetch the weather data
// async function fetchWeather(latitude, longitude) {
//     const apiKey = await fetchApiKey();
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
    
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
// }

// // Display the weather information
// function displayWeather(weather) {
//     const weatherReport = document.getElementById('weather-report');
//     if (weather && weather.weather && weather.weather[0] && weather.main) {
//         const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
//         weatherReport.innerHTML = `
//             <h3>${weather.name}</h3>
//             <p><img src="${iconUrl}" alt="${weather.weather[0].description}"> ${weather.main.temp}°C</p>
//             <p>${weather.weather[0].description}</p>
//         `;
//     } else {
//         weatherReport.innerHTML = '<p>Unable to retrieve weather information at this time.</p>';
//     }
// }

// // Get the user's location and fetch weather information
// function getLocationAndWeather() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             fetchWeather(latitude, longitude)
//                 .then(displayWeather)
//                 .catch(error => {
//                     console.error('Error fetching weather data:', error);
//                     document.getElementById('weather-report').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
//                 });
//         }, error => {
//             console.error('Error getting geolocation:', error);
//             document.getElementById('weather-report').innerHTML = '<p>Unable to retrieve your location. Please ensure location services are enabled and try again.</p>';
//         });
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//         document.getElementById('weather-report').innerHTML = '<p>Geolocation is not supported by this browser.</p>';
//     }
// }

// // Run the function to get location and weather information when the page loads
// document.addEventListener('DOMContentLoaded', getLocationAndWeather);

// // Chat popup functionality
// document.getElementById('chat-icon').addEventListener('click', () => {
//     document.getElementById('chat-popup').style.display = 'block';
// });

// document.getElementById('close-chat').addEventListener('click', () => {
//     document.getElementById('chat-popup').style.display = 'none';
// });



console.log("this is working");
async function fetchApiKey() {
    try {
        const response = await fetch('/api/key');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.error('Error fetching API key:', error);
        document.getElementById('weather-report').innerHTML = '<p>Error fetching API key. Please try again later.</p>';
    }
}

// Function to fetch the weather data
async function fetchWeather(latitude, longitude) {
    try {
        const apiKey = await fetchApiKey();
        if (!apiKey) throw new Error('No API key available');
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-report').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    }
}

// Display the weather information
function displayWeather(weather) {
    const weatherReport = document.getElementById('weather-report');
    if (weather && weather.weather && weather.weather[0] && weather.main) {
        const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
        weatherReport.innerHTML = `
            <h3>${weather.name}</h3>
            <p><img src="${iconUrl}" alt="${weather.weather[0].description}"> ${weather.main.temp}°C</p>
            <p>${weather.weather[0].description}</p>
        `;
    } else {
        weatherReport.innerHTML = '<p>Unable to retrieve weather information at this time.</p>';
    }
}

// Get the user's location and fetch weather information
function getLocationAndWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude)
                .then(displayWeather)
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('weather-report').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
                });
        }, error => {
            console.error('Error getting geolocation:', error);
            document.getElementById('weather-report').innerHTML = '<p>Unable to retrieve your location. Please ensure location services are enabled and try again.</p>';
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        document.getElementById('weather-report').innerHTML = '<p>Geolocation is not supported by this browser.</p>';
    }
}

// Run the function to get location and weather information when the page loads
document.addEventListener('DOMContentLoaded', getLocationAndWeather);

// Chat popup functionality
document.getElementById('chat-icon').addEventListener('click', () => {
    document.getElementById('chat-popup').style.display = 'block';
});

document.getElementById('close-chat').addEventListener('click', () => {
    document.getElementById('chat-popup').style.display = 'none';
});
