let weather = [
  { name: "paris", temp: 19.7, humidity: 80 },
  { name: "tokyo", temp: 17.3, humidity: 50 },
  { name: "lisbon", temp: 30.2, humidity: 20 },
  { name: "san francisco", temp: 20.9, humidity: 100 },
  { name: "oslo", temp: -5, humidity: 20 },
];

// write your code here

let city = prompt("Enter your city");
city = city.toLowerCase().trim();
if (city === weather[0].name) {
  alert(
    `It is currently ${weather[0].temp}°C in ${weather[0].name} with a humidity of ${weather[0].humidity} %`
  );
} else if (city === weather[1].name) {
  alert(
    `It is currently ${weather[1].temp}°C in ${weather[1].name} with a humidity of ${weather[1].humidity} %`
  );
} else if (city === weather[2].name) {
  alert(
    `It is currently ${weather[2].temp}°C in ${weather[2].name} with a humidity of ${weather[2].humidity} %`
  );
} else if (city === weather[3].name) {
  alert(
    `It is currently ${weather[3].temp}°C in ${weather[3].name} with a humidity of ${weather[3].humidity} %`
  );
} else if (city === weather[4].name) {
  alert(
    `It is currently ${weather[4].temp}°C in ${weather[4].name} with a humidity of ${weather[4].humidity} %`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
