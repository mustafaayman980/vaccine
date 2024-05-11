import { createContext, useContext, useState } from "react";

const CreateAuthContext =  createContext()


// eslint-disable-next-line react/prop-types
export default function AuthContext({children}) {
let parent =  sessionStorage.getItem("parent");

parent = JSON.parse(parent)
const sessionToken = sessionStorage.getItem("token");
    const [profile, setProfile] = useState(parent ?parent: null); 
    const [token, setToken] = useState(sessionToken ? sessionToken : null);
  return (
    <CreateAuthContext.Provider
      value={{ profile, onProfile: setProfile, token, setToken }}
    >
      {children}
    </CreateAuthContext.Provider>
  );
}


export const useAuthContext = ()=> useContext(CreateAuthContext)