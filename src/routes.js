/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Registro from "views/Registro.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Developers",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/registro",
    name: "Registro",
    icon: "nc-icon nc-pin-3",
    component: Registro,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Actualizar",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];
export default routes;
