import axios from "axios";
import getEnvVars from "./env";
const api_key = getEnvVars().google_key;
const mapsapi = "https://maps.googleapis.com/maps/api";
//https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=YOUR_API_KEY

export default new (class corsapi {
  async getPlacesByLngLat(lat, lng) {
    const link =
      mapsapi + "/" + `geocode/json?latlng=${lat},${lng}&key=` + api_key;
    return await axios
      .get(link)
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getAutoComplete(query) {
    const link =
      mapsapi +
      "/" +
      `place/autocomplete/json?input=${query}&types=geocode&key=` +
      api_key;
    return await axios
      .get(link)
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
})();
