// src/pages/FormUser.jsx
import { useState, useEffect } from "react";
import { createUsuario, getRoles } from "../services/usersServices";
import "./from.css";

export default function FormUser() {
  const [form, setForm] = useState({
    identificacion: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    password: "",
    sexo: "M",
    edad: "",
    estatus: "activo",
    role_id: "",
  });

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles().then((res) => setRoles(res.data.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUsuario(form);
      alert("Usuario creado exitosamente");
    } catch (err) {
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="usuarios-container">
      <h2>Nuevo Usuario</h2>
      <form onSubmit={handleSubmit} className="usuario-form">
        <input name="identificacion" placeholder="Identificación" onChange={handleChange} required />
        <input name="nombres" placeholder="Nombres" onChange={handleChange} required />
        <input name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
        <input name="direccion" placeholder="Dirección" onChange={handleChange} />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <input name="edad" type="number" placeholder="Edad" onChange={handleChange} />
        <select name="estatus" onChange={handleChange} required>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>

        </select>


        <select name="sexo" onChange={handleChange}>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>

        <select name="role_id" onChange={handleChange} required>
          <option value="">Seleccione Rol</option>
          {roles.map((rol) => (
            <option key={rol.id} value={rol.id}>{rol.name}</option>
          ))}
        </select>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
