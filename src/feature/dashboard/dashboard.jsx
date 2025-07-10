
import Sidebar from "../dashboard/components/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (

    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "200px", padding: "2rem", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
