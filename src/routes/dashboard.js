import Dashboard from "../views/Dashboard";
import UserProfile from "../views/UserProfile";
import TableUsers from "../views/TableUsers";
// import TableRecords from "../views/TableRecords";
import TablePolls from "../views/TablePolls";
import TableVotes from "../views/TableVotes";
import TableEvents from "../views/TableEvents";
import TableVillages from "../views/TableVillages";
import TableBooths from "../views/TableBooths";
import FormAddPoll from "../views/FormAddPoll";
// import Notifications from "views/Notifications/Notifications.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import Icons from "../views/Icons";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    noSidebar: true,
    name: "User Profile",
    path: "/users/:username",
    component: UserProfile
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-badge",
    component: TableUsers
  },
  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-calendar-60",
    component: TableEvents
  },
  {
    path: "/villages",
    name: "Villages",
    icon: "nc-icon nc-pin-3",
    component: TableVillages
  },
  {
    path: "/booths",
    name: "Booths",
    icon: "nc-icon nc-shop",
    component: TableBooths
  },
  {
    noSidebar: true,
    name: "Form Poll",
    path: "/polls/create",
    component: FormAddPoll
  },
  {
    path: "/polls",
    name: "Polls",
    icon: "nc-icon nc-money-coins",
    component: TablePolls
  },
  {
    path: "/votes",
    name: "Votes",
    icon: "nc-icon nc-chart-bar-32",
    component: TableVotes
  },
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
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography
  // },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
