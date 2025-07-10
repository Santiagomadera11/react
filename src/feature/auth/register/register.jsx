// src/components/Register.jsx
import { useState, useEffect } from "react";
import { createUser, getRoles } from "../services/registerServices";
import "./register.css";


export default function Register() {
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
    role_id: ""
  });

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles().then(res => setRoles(res.data.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(form);
      alert("Usuario registrado exitosamente");
    } catch (err) {
      alert("Error al registrar usuario");
    }
  };


  return (
    <div className="register-container">
      <form className="register-form"  onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <input name="identificacion" placeholder="Identificación" onChange={handleChange} required />
        <input name="nombres" placeholder="Nombres" onChange={handleChange} required />
        <input name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
        <input name="direccion" placeholder="Dirección" onChange={handleChange} />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
        <select name="sexo" onChange={handleChange}>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
        <input name="edad" type="number" placeholder="Edad" onChange={handleChange} />
        <select name="estatus" onChange={handleChange}>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <select name="role_id" onChange={handleChange} required>
          <option value="">Seleccione un rol</option>
          {roles.map((rol) => (
            <option key={rol.id} value={rol.id}>{rol.name}</option>
          ))}
        </select>
        <button  type="submit">Registrar</button>
        <p className="login-link">¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
      </form>
    </div>
  );
}
