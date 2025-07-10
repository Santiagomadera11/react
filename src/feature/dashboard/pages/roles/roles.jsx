// src/feature/dashboard/pages/roles/roles.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoles, deleteRol } from "../services/rolesServices";
import "./roles.css";

export default function Roles() {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const fetchRoles = async () => {
    try {
      const res = await getRoles();
      setRoles(res.data.data);
    } catch (err) {
      console.error("Error al obtener roles", err);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este rol?")) {
      try {
        await deleteRol(id);
        fetchRoles();
      } catch (err) {
        alert("Error al eliminar rol");
      }
    }
  };

  return (
    <div className="roles-container">
      <h2>Gestión de Roles</h2>

      <button
        onClick={() => navigate("/dashboard/roles/nuevo")}
        className="btn-nuevo"
      >
        + Nuevo Rol
      </button>

      <table className="roles-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.length > 0 ? (
            roles.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(r.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No hay roles registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
