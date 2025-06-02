import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllGroups from "../pages/AllGroups";
import CreateGroup from "../pages/CreateGroup";
import MyGroups from "../pages/MyGroups";
import PrivateRoute from "./PrivateRoute";
import GroupDetails from "../pages/GroupDetails";
import UpdateGroup from "../pages/UpdateGroup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, 
        loader: () => fetch("https://hobbyhub-server-psi.vercel.app/groups"),
        Component: Home 
      },
      { path: "allGroups", 
        loader: () => fetch("https://hobbyhub-server-psi.vercel.app/groups"),
        Component: AllGroups },
      {
        path: "groupDetails/:id",
        loader: ({ params }) =>
          fetch(`https://hobbyhub-server-psi.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "myGroups",
        loader: () => fetch("https://hobbyhub-server-psi.vercel.app/groups"),
        element: (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
      },
      {
        path: "updateGroup/:id",
        loader: ({ params }) =>
          fetch(`https://hobbyhub-server-psi.vercel.app/groups/${params.id}`), 
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
      },
      { path: "signin", Component: Login },
      { path: "signup", Component: Register },
    ],
  },
]);

export default router;
