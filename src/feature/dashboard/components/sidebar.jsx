
import { Link, useNavigate } from "react-router-dom";
import { IoLogoReact } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import "./sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <IoLogoReact size={60} />
      <ul>
        <li><Link to="/dashboard/usuarios">Usuarios</Link></li>
        <li><Link to="/dashboard/roles">Roles</Link></li>
        <li><Link to="/dashboard/productos">Productos</Link></li>
      </ul>

      <button className="btn-logout" onClick={handleLogout}> <ImExit size={20} />
        Cerrar sesión
      </button>
    </div>
  );
}
