import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "layouts/Login.jsx";

var indexRoutes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
