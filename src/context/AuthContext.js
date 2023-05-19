import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        // Check if user is stored in local storage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          // If user exists, update the initial state with the stored user
          const parsedUser = JSON.parse(storedUser)
          dispatch({ type: "LOGIN_SUCCESS", payload: parsedUser.data });
        }
      }, []);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching, 
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>

    )
};