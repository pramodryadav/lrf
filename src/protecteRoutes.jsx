import React from "react";
import { Navigate } from "react-router-dom";
import ResponsiveDrawer from "./components/Sidebar";

export default function ProtectedRoutes() {

    const token = localStorage.getItem("token");
    return !token ? <ResponsiveDrawer/> : <Navigate to="/login" replace />

}