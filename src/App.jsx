import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const routers = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/property-detail/:id", element: <PropertyDetails /> },
];

const router = createBrowserRouter(routers);
function App() {
  return (
    <div className="mx-auto max-w-[1440px] bg-white ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
