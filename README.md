# Mapping_Earthquakes

## Basil and Sadhana like the earthquake map with two different maps and the earthquake overlay. The client would like to see the earthquake data in relation to the tectonic plates’ location on the earth, and they would like to see all the earthquakes with a magnitude greater than 4.5 on the map, and they would like to see the data on a third map.

Leaflet.js Application Programming Interface (API) was used to populate a geographical map with GeoJSON earthquake data from a goverentment populated URL. Each earthquake is visually represented by a circle and color, where higher magnitude earthquakes will have a larger diameter and are darker in color. In addition, each earthquake has a popup marker that, when clicked, shows the magnitude of the earthquake and the location of the earthquake. 

## Deliverable One: Add Tectonic Plate Data
Using JavaScript, Leaflet.js, and geoJSON data, tectonic plate data using d3.json(), the map using the geoJSON() layer, the tectonic plate LineString data is depicted on the map, the tectonic plate data was added as an overlay object with the earthquake data.
![Fig - 1 - Techtonic Plates]()

## Deliverable 2: Add Major Earthquake Data
Using JavaScript, Leaflet.js, and geoJSON data, add major earthquake data to the map using d3.json(). Also added color and set the radius of the circle markers based on the magnitude of earthquake, and added a popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer.
![Fig 2 - All Earthquakes]()

## Deliverable 3: Add an Additional Map
Mapbox Outdoors style was added as a third layer option to view the earthquake data.
![Fig 3 - Outdoor layer]()










