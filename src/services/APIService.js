import axios from "axios";
import nprogress from "nprogress";

const apiClient = axios.create({
  baseURL: "https://gogot-server.herokuapp.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const instance = axios.create({
  baseURL: "https://gogot-server.herokuapp.com/"
});

instance.interceptors.request.use(config => {
  nprogress.start();
  return config;
});

instance.interceptors.response.use(response => {
  nprogress.done();
  return response;
});

export default {
  instance,
  getCharacters() {
    return apiClient.get("/characters");
  },
  getCharacter(id) {
    return apiClient.get("/characters/" + id);
  }
};
