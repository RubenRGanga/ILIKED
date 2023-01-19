import { Navigate } from "react-router-dom";
import AuthConsumer from "../hooks/useAuth";

const ProtectedRoute = ({ isAllowed, children }) => {
  const [user] = AuthConsumer();

  if (user[isAllowed]) return children;
  if (isAllowed === "isNotAuth" && !user.isAuth) return children;

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
