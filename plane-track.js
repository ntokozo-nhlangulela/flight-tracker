import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { flightApiCall } from "./src/api/api.js";
//import { backup as flights } from "./src/flights";
var listContainer = document.querySelector("#flight-list");
//console.log(listContainer);

function flightHandler(coordinates) {
  console.log(coordinates);
  marker.setLatLng([coordinates.long, coordinates.lat]);
  //setFlightLocation(coordinates.lat, coordinates.long);
  map.flyTo([coordinates.long, coordinates.lat], 11);
}

const flights = await flightApiCall();
console.log(flights);

for (let i = 0; i < 20; i++) {
  let coordinates = {
    lat: 0,
    long: 0,
  };
  const flightTable = document.createElement("tr");
  const flightTableData = document.createElement("td");
  flightTableData.innerText = flights[i][1];
  const flightTableData2 = document.createElement("td");
  flightTableData2.innerText = flights[i][2];
  const flightTableData3 = document.createElement("td");
  flightTableData3.innerText = flights[i][9];

  flightTable.appendChild(flightTableData);
  flightTable.appendChild(flightTableData2);
  flightTable.appendChild(flightTableData3);
  flightTable.className = "flex-item";

  listContainer.appendChild(flightTable);
  coordinates.lat = flights[i][5];
  coordinates.long = flights[i][6];
  flightTable.addEventListener("click", () => flightHandler(coordinates));
}

let map = L.map("map").setView([28.0473, 26.2041], 2);

// function handleFlyTo() {
//   const mapRef = useRef();
//   const { current = {} } = mapRef;
//   const { leafLetElement: map } = current;
//   map.flyTo(coordinates, 13, {
//     duration: 2,
//   });
// }

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let greenIcon = L.icon({
  iconUrl: "black-plane.png",
  iconSize: [25, 25],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

let marker = L.marker([28.0473, 26.2041], { icon: greenIcon }).addTo(map);

export function resetMapLocationView() {
  map.flyTo([-35, 23], 2);
}

export function setFlightLocation(lat = 0, lon = 0) {
  console.log(lat, long);
  map.flyTo([lat, lon], 10);
  marker.setLatLng([lat, lon]);
}
