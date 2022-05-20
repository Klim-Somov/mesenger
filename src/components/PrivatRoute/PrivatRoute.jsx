import { Navigate, Outlet } from "react-router";

export const PrivatRoute = ({ authed }) =>
  authed ? <Outlet /> : <Navigate to="/" replace />;
