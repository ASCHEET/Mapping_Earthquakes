const data = spill_data;


function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 37.09, lng: -95.712 },
      mapTypeId: "terrain",
    });
      // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].UNINTENTIONAL_RELEASE_BBLS) * 100,
    });
  }
}
