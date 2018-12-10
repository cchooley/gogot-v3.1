import axios from "axios";
import jwtDecode from "jwt-decode";

const apiClient = axios.create({
  baseURL: "https://gogot-server.herokuapp.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getCharacters() {
    return apiClient.get("/characters");
  },
  getCharacter(id) {
    return apiClient.get("/characters/" + id);
  },
  login(player) {
    return apiClient.post("/auth/login", player).then(response => {
      window.localStorage.token = response.data.token;
    });
  },
  getPlayer() {
    let decoded = jwtDecode(window.localStorage.token);
    return apiClient.get("/players/" + decoded.userId);
  }
};
