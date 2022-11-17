import Constants from "expo-constants";
import { Platform } from "react-native";

const ENV = {
  default:{
    // apiUrl: "https://jsonplaceholder.typicode.com/tordos",
    apiUrl: "https://echat.essentialdirect.ng/api",
    apiUrl2: "http://localhost:8000/api",
    // apiUrl: "http://192.168.43.139:8080/api/v1",
    // apiUrl:"http://localhost:5262/api/v1",
    amplitudeApiKey: null,
    google_key: "AIzaSyCdL-pBPEaDtnBbxDs9X7WYyRScmnBfjsQ",
    paystackclient: "pk_test_9df268d64ddb8974fb23c5d9e843eb5b57261938",
  },
  dev: {
    // apiUrl: "https://jsonplaceholder.typicode.com/tordos",
    apiUrl: "https://echat.essentialdirect.ng/api",
    apiUrl2: "http://localhost:8000/api",
    // apiUrl: "http://192.168.43.139:8080/api/v1",
    // apiUrl:"http://localhost:5262/api/v1",
    amplitudeApiKey: null,
    google_key: "AIzaSyCdL-pBPEaDtnBbxDs9X7WYyRScmnBfjsQ",
    paystackclient: "pk_test_9df268d64ddb8974fb23c5d9e843eb5b57261938",
  },
  staging: {
   // apiUrl: "https://jsonplaceholder.typicode.com/tordos",
   apiUrl: "https://echat.essentialdirect.ng/api",
   apiUrl2: "http://localhost:8000/api",
   // apiUrl: "http://192.168.43.139:8080/api/v1",
   // apiUrl:"http://localhost:5262/api/v1",
   amplitudeApiKey: null,
   google_key: "AIzaSyCdL-pBPEaDtnBbxDs9X7WYyRScmnBfjsQ",
   paystackclient: "pk_test_9df268d64ddb8974fb23c5d9e843eb5b57261938",
  },
  prod: {
   // apiUrl: "https://jsonplaceholder.typicode.com/tordos",
   apiUrl: "https://echat.essentialdirect.ng/api",
   apiUrl2: "http://localhost:8000/api",
   // apiUrl: "http://192.168.43.139:8080/api/v1",
   // apiUrl:"http://localhost:5262/api/v1",
   amplitudeApiKey: null,
   google_key: "AIzaSyCdL-pBPEaDtnBbxDs9X7WYyRScmnBfjsQ",
   paystackclient: "pk_test_9df268d64ddb8974fb23c5d9e843eb5b57261938",
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  } else return  ENV.default;
};

export default getEnvVars;
