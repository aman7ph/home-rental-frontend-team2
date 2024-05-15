import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// export default function PrivateRoute() {
//   const { userData } = useSelector((state) => state.auth);
//   return Object.keys(userData).length !== 0 ? <Outlet /> : <Navigate to="/" />;
// }
export default function PrivateRoute() {
  return <Outlet />;
}
