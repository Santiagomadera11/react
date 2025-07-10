// src/feature/dashboard/pages/components/fromRoles.jsx
import { useState } from "react";
import { createRol } from "../services/rolesServices";
import { useNavigate } from "react-router-dom";
import "./from.css";

export default function FromRoles() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Nombre requerido");

    try {
      await createRol({ name });
      alert("Rol creado exitosamente");
      navigate("/dashboard/roles");
    } catch (err) {
      alert("Error al crear rol");
    }
  };

  return (
    <div className="form-container">
      <h2>Nuevo Rol</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Nombre del rol"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className="botonusers" type="submit">Guardar</button>
      </form>
    </div>
  );
}
