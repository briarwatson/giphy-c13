import { useState, createContext, useContext, useReducer } from 'react';
import userReducer from '../reducers/UserReducer';
import { SET_USER, CLEAR_USER } from '../reducers/UserReducer';

// Creates the context with a default value null
export const UserContext = createContext(null);

// Creates a custom hook for easier access to the UserContext
export const useUserContext = () => useContext(UserContext);

// UserProvider component that wraps our app in the context
export function UserProvider(props) {
    const [user, dispatch] = useReducer(userReducer, null);

    function setUser(newUser) {
        dispatch({ type: SET_USER, payload: newUser });
        console.log(newUser);
    }

    function clearUser() {
        dispatch({ type: CLEAR_USER });
    }

    // The values that are given to the components
    const value = { user, setUser, clearUser};

    // Gives us the provider which allows other components access to the values
    // props.children represents every rendered component (login page, favorites page, etc).
    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}