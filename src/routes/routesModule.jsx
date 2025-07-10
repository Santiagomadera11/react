import { Routes, Route } from "react-router-dom";
import Login from '../feature/auth/login/login';
import Register from '../feature/auth/register/register';
import Dashboard from '../feature/dashboard/dashboard';
import Productos from '../feature/dashboard/pages/productos/productos';
import FromProductos from '../feature/dashboard/pages/components/fromProductos';
import Roles from '../feature/dashboard/pages/roles/roles';
import FromRoles from '../feature/dashboard/pages/components/fromRoles';
import Users from '../feature/dashboard/pages/users/users';
import FromUsers from '../feature/dashboard/pages/components/fromUsers';

const RoutesModule = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="productos" element={<Productos />} />
        <Route path="productos/nuevo" element={<FromProductos />} />
        <Route path="roles" element={<Roles />} />
        <Route path="roles/nuevo" element={<FromRoles />} />
        <Route path="usuarios" element={<Users />} />
        <Route path="usuarios/nuevo" element={<FromUsers />} />
      </Route>
    </Routes>
  );
};

export default RoutesModule;
