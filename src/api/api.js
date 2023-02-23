// import { backup } from "./src/flights";
// console.log(backup.states);

//export let apiResult = {};

// const apiCall = "https://opensky-network.org/api/states/all";

// export function getFlight() {
//   return fetch(`${apiCall}`);
// }

// const flightApi = "https://opensky-network.org/api/states/all";
// fetch(flightApi)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const apiResult = data.states.slice(0, 20);
//     console.log(apiResult);
//   });

export async function flightApiCall() {
  const flightApi = "https://opensky-network.org/api/states/all";
  const flights = await fetch(flightApi)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      return data.states.slice(0, 20);
      //console.log(apiResult);
    });

  return flights;
}
