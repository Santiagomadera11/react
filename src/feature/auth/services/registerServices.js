
import axios from "axios";

const API = "http://localhost:3000/api";

export const createUser = (data) => axios.post(`${API}/users`, data);
export const getRoles = () => axios.get(`${API}/roles`);
