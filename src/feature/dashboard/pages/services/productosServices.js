// src/services/productosServices.js
import axios from "axios";

const API = "http://localhost:3000/api";

export const getProductos = () => axios.get(`${API}/productos`);
export const createProducto = (data) => axios.post(`${API}/productos`, data);
export const deleteProducto = (id) => axios.delete(`${API}/productos/${id}`);
