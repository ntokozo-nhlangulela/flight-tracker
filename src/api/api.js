import { backup } from "./src/flights";
console.log(backup.states);

export let apiResult = {};
const flightApi = "https://opensky-network.org/api/states/all";
fetch(flightApi)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    this.apiResult = data.states.slice(0, 20).map((item) => ({
      countryName: item[2],
      code: item[1],
      latitude: item[6],
      longitude: item[5],
    }));
    console.log(apiResult, "Check API");
    return apiResult;
  });
console.log(apiResult);
