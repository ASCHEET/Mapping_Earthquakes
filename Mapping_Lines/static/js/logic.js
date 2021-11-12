// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
    

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1974, -97.666],
  [43.6426, -79.4439],
  [40.641312, -73.778137]
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "yellow"
}).addTo(map);


// // Get data from cities.js
// let cityData = cities;


// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/200000,
//     color: "yellow"
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Create the tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add the 'graymap' tile layer to the map
streets.addTo(map);