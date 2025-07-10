import axios from "axios";

const API = "http://localhost:3000/api";

export const login = (data) => axios.post(`${API}/login`, data);
