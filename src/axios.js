import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-4ed77/us-central1/api", // THE API (cloud functon) URL
});

export default instance;
