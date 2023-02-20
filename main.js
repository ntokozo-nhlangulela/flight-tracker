//import { apiResult } from "./api.js";
import { backup } from "./src/flights";
var listContainer = document.querySelector("#flight-list");
console.log(listContainer);

function flightHandler(coordinates) {
  console.log(coordinates);
  marker.setLatLng([coordinates.long, coordinates.lat]);
}
//listContainer.innerHTML = "<ul><li>List A</li><li>List B</li>"
//flights = flightsarray[0];
//console.log(apiResult);

for (let i = 0; i < 20; i++) {
  //listContainer.innerHTML += `<div><p>${backup.states[i][1]}</p><p>${backup.states[i][2]}</p><p></p></div>`;
  let coordinates = {
    lat: 0,
    long: 1,
  };
  const flightCard = document.createElement("tr");
  const flightCallSign = document.createElement("td");
  flightCallSign.innerText = backup.states[i][1];
  const flightCallSign2 = document.createElement("td");
  flightCallSign2.innerText = backup.states[i][2];

  flightCard.appendChild(flightCallSign);
  flightCard.appendChild(flightCallSign2);
  flightCard.className = "flex-item";

  listContainer.appendChild(flightCard);
  coordinates.lat = backup.states[i][5];
  coordinates.long = backup.states[i][6];
  flightCard.addEventListener("click", () => flightHandler(coordinates));
}

// var leafLetIcon = L.icon({
//   iconUrl:
//     "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.imgbin.com%2F23%2F15%2F2%2Fimgbin-airplane-computer-icons-icon-design-airport-airplane-Pc8d6w61x1bfdYwVY1KPm8bvw.jpg&imgrefurl=https%3A%2F%2Fimgbin.com%2Fpng%2Fktwv1kcL%2Fairplane-computer-icons-icon-design-airport-png&tbnid=iUbrmYE_lMp2KM&vet=10CFQQMyiMAWoXChMIkPaSoPOe_QIVAAAAAB0AAAAAEAM..i&docid=uaDnneuCpocSOM&w=728&h=536&itg=1&q=leaflet%20plane%20icon&ved=0CFQQMyiMAWoXChMIkPaSoPOe_QIVAAAAAB0AAAAAEAM",
//   iconSize,
// });

var map = L.map("map").setView([28.0473, 26.2041], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: "black-plane.png",
  iconSize: [25, 25],
  //shadowSize: [50, 64],
  iconAnchor: [22, 94],
  //shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

var marker = L.marker([28.0473, 26.2041], { icon: greenIcon }).addTo(map);
// marker.bindPopup(`<b>${item.countryName}</b>`).openPopup();

// L.marker([33.73, 72.90802001953125], {
//   icon: L.BeautifyIcon.icon(options),
//   draggable: true,
// })
//   .addTo(map)
//   .bindPopup("I'm Beautify");

// options = {
//   icon: "plane",
//   iconShape: "marker",
//   borderColor: "#8D208B",
//   textColor: "#8D208B",
//   backgroundColor: "transparent",
// };
