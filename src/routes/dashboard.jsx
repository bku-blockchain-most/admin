import Dashboard from "views/Dashboard/Dashboard.jsx";
import Users from "views/Users.jsx";
import Polls from "views/Polls.jsx";
// import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import UserPage from "views/UserPage/UserPage.jsx";
import UserProfile from "../views/UserProfile";
import Votes from "../views/Votes";
// import RecordsTable from "../views/Records";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    noSidebar: true,
    path: "/users/:username",
    component: UserProfile
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-badge",
    component: Users
  },
  {
    path: "/polls",
    name: "Polls",
    icon: "nc-icon nc-money-coins",
    component: Polls
  },
  {
    path: "/votes",
    name: "Votes",
    icon: "nc-icon nc-chart-bar-32",
    component: Votes
  },
  // {
  //   noSidebar: true,
  //   path: "/records/:userID",
  //   component: RecordsTable
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons
  // },
  // { path: "/maps", name: "Maps", icon: "nc-icon nc-pin-3", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography
  // },
  // // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship"
  // },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
