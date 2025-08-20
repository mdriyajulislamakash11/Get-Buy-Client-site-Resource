import { useContext } from "react";
import { AuthContex } from "../auth/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContex);
  return auth;
};

export default useAuth;
