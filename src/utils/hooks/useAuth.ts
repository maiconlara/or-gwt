import {useContext} from "react";
import {AuthContext} from "@/contexts/auth";

export const useAuth = () => {
  const authData = useContext(AuthContext);

  if (!authData) {
    throw new Error("useAuth must be used within a <AuthContextProvider />");
  }

  return authData;
};
