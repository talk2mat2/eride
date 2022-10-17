import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from "react-native-toast-notifications";

export const AsyncSave = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

// getting data
export const AsyncGetItem = async (key) => {
  try {
    const userData = JSON.parse(await AsyncStorage.getItem(key));

    return userData;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const AsyncRemove = (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const appToast = () => {
  const { show, hide, hideAll, update } = useToast();

  return {
    show,
    hide,
    hideAll,
    update,
  };
};

 // Converts numeric degrees to radians
 function toRad(Value) 
 {
     return Value * Math.PI / 180;
 }
  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
export function calcDistanceLatLong(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}