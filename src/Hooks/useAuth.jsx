import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
