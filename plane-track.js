//import { apiResult } from../api/api.js
import { backup } from "./src/flights";
var listContainer = document.querySelector("#flight-list");
console.log(listContainer);

function flightHandler(coordinates) {
  console.log(coordinates);
  marker.setLatLng([coordinates.long, coordinates.lat]);
}

for (let i = 0; i < 20; i++) {
  let coordinates = {
    lat: 0,
    long: 0,
  };
  const flightTable = document.createElement("tr");
  const flightTableData = document.createElement("td");
  flightTableData.innerText = backup.states[i][1];
  const flightTableData2 = document.createElement("td");
  flightTableData2.innerText = backup.states[i][2];
  const flightTableData3 = document.createElement("td");
  flightTableData3.innerText = backup.states[i][9];

  flightTable.appendChild(flightTableData);
  flightTable.appendChild(flightTableData2);
  flightTable.appendChild(flightTableData3);
  flightTable.className = "flex-item";

  listContainer.appendChild(flightTable);
  coordinates.lat = backup.states[i][5];
  coordinates.long = backup.states[i][6];
  flightTable.addEventListener("click", () => flightHandler(coordinates));
}

var map = L.map("map").setView([28.0473, 26.2041], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: "black-plane.png",
  iconSize: [25, 25],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

var marker = L.marker([28.0473, 26.2041], { icon: greenIcon }).addTo(map);
