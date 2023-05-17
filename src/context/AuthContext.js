import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    user: {
        _id: "6458ef0947655ffcb1efb52b", 
        username: "vivek", 
        email: "vivek@gmail.com", 
        profilePicture: "person/6.jpeg", 
        coverPicture: "noCover.png", 
        follower: ["645a7d683f9e762794d5e8f0"], following: ["645a7d683f9e762794d5e8f0"], isAdmin: false,
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching, error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>

    )
};