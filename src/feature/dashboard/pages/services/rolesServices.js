// src/services/rolesServices.js
import axios from "axios";

const API = "http://localhost:3000/api";

export const getRoles = () => axios.get(`${API}/roles`);
export const createRol = (data) => axios.post(`${API}/roles`, data);
export const deleteRol = (id) => axios.delete(`${API}/roles/${id}`);
