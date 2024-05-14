import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import PropertyDetails from "./features/houses/components/PropertyDetails";
import Login from "./features/auth/components/Login";
import SignUp from "./features/users/components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./features/auth/components/ForgotPassword";
import ResetPassword from "./features/auth/components/ResetPassword";
import GeneralLayout from "./Layout/GeneralLayout";

const routers = [
  {
    path: "",
    element: <GeneralLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password/:token", element: <ResetPassword /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/property-detail/:id", element: <PropertyDetails /> },
    ],
  },
  {
    path: "",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashbord",
        element: <Dashboard />,
      },
    ],
  },
];

const router = createBrowserRouter(routers);
function App() {
  return (
    <div className="mx-auto max-w-[1440px] bg-white ">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
