
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductos, deleteProducto } from "../services/productosServices";
import "./productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const fetchProductos = async () => {
    try {
      const res = await getProductos();
      setProductos(res.data.data);
    } catch (err) {
      console.error("Error al obtener productos", err);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este producto?")) {
      try {
        await deleteProducto(id);
        fetchProductos();
      } catch (err) {
        alert("Error al eliminar producto");
      }
    }
  };

  return (
    <div className="productos-container">
      <h2>Gestión de Productos</h2>

      <button
        onClick={() => navigate("/dashboard/productos/nuevo")}
        className="btn-nuevo"
      >
        + Nuevo Producto
      </button>

      <table className="productos-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio Compra</th>
            <th>Precio Venta</th>
            <th>IVA</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length > 0 ? (
            productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.categoria}</td>
                <td>${p.precio_compra}</td>
                <td>${p.precio_venta}</td>
                <td>{p.iva}%</td>
                <td>
                  <img src={p.imagen_url} alt="producto" width={40} />
                </td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(p.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                No hay productos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
