import { createContext, useContext } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../../firebase"

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const crearUsuario = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <UserContext.Provider value={crearUsuario}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};