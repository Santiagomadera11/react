// src/services/userService.js
import axios from "axios";
const API = "http://localhost:3000/api";

export const getUsuarios = () => axios.get(`${API}/users`);
export const createUsuario = (data) => axios.post(`${API}/users`, data);
export const deleteUsuario = (id) => axios.delete(`${API}/users/${id}`);
export const getRoles = () => axios.get(`${API}/roles`);
