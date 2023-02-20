import { backup } from "./src/flights";
console.log(backup.states);

// export let apiResult = {};
// //const flightApi = "https://opensky-network.org/api/states/all";
// fetch(flightApi)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     this.apiResult = data.states.slice(0, 20).map((item) => ({
//       countryName: item[2],
//       code: item[1],
//       latitude: item[6],
//       longitude: item[5],
//     }));
//     console.log(apiResult, "Check API");
//     return apiResult;
//   });
//console.log(apiResult, );

// fetch("https://opensky-network.org/api/states/all")
//   .then((res) => res.json())
//   .then((data) => {
//     apiResult = map((item) => ({
//       countryName: item[2],
//       latitude: item[6],
//       longitude: item[5],
//     }));

//     console.log("checking: ", apiResult);
//     testing(arr);

//     apiResult.forEach((item) => {
//       var map = L.map("map").setView([item.latitude, item.longitude], 2);
//       var marker = L.marker([item.latitude, item.longitude]).addTo(map);
//       marker.bindPopup(`<b>${item.countryName}</b>`).openPopup();

//       L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         maxZoom: 19,
//         attribution:
//           '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//       }).addTo(map);
//     });
//   })
//   .catch((error) => console.log(error));

// const testing = (...t) => {
//   //ToDo: returna api results
//   console.log("testing: ", t);
// };

// return "testing";
