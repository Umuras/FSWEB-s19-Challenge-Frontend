import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const history = useHistory();

  if (!token) {
    toast.error("You must be logged in to access this page.");
    history.push("/login");
  }

  return children;
}
