
import { useState } from "react";
import { createProducto } from "../services/productosServices";
import { useNavigate } from "react-router-dom";
import "./from.css";

export default function FromProductos() {
  const [producto, setProducto] = useState({
    name: "",
    categoria: "",
    precio_compra: "",
    precio_venta: "",
    iva: "",
    imagen_url: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProducto(producto);
      alert("Producto creado exitosamente");
      navigate("/dashboard/productos");
    } catch (err) {
      alert("Error al crear producto");
    }
  };

  return (
    <div className="form-container">
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="precio_compra"
          placeholder="Precio de compra"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="precio_venta"
          placeholder="Precio de venta"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="iva"
          placeholder="IVA (%)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagen_url"
          placeholder="URL de imagen"
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
