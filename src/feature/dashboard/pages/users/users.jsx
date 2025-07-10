// src/pages/Usuarios.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getUsuarios, deleteUsuario,} from "../services/usersServices";
import "./users.css";
export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // Obtener usuarios desde la API
  const fetchUsuarios = async () => {
    try {
      const res = await getUsuarios();
      setUsuarios(res.data.data);
    } catch (err) {
      console.error("Error al obtener usuarios", err);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Eliminar un usuario
  const handleDelete = async (id) => {
    if (window.confirm("¿Deseas eliminar este usuario?")) {
      try {
        await deleteUsuario(id);
        fetchUsuarios();
      } catch (err) {
        alert("Error al eliminar usuario");
      }
    }
  };

  return (
    <div className="usuarios-container">
      <h2>Gestión de Usuarios</h2>

      <button
        onClick={() => navigate("/dashboard/usuarios/nuevo")}


        className="btn-nuevo"
      >
        + Nuevo Usuario
      </button>

      <table className="usuario-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Identificación</th>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.identificacion}</td>
                <td>{u.nombres} {u.apellidos}</td>
                <td>{u.email}</td>
                <td>{u.role_id}</td>
                <td>{u.estatus}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(u.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No hay usuarios registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
