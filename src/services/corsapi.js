import axios from "axios";
import getEnvVars from "./env";
const api_key = getEnvVars().google_key;
const mapsapi = "https://maps.googleapis.com/maps/api";

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
})();
