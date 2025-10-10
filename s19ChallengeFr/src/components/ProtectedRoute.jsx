import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      toast.error("You must be logged in to access this page.");
      history.push("/login");
    }
  }, [token, history]);

  // Eğer token yoksa, yönlendirme yapılmadan önce boş bir şey dön
  if (!token) {
    return null;
  }

  return children;
}
