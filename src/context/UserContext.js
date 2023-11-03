import { useState, createContext, useContext } from 'react';

// Creates the context with a default value null
export const UserContext = createContext(null);

// Creates a custom hook for easier access to the UserContext
export const useUserContext = () => useContext(UserContext);

// UserProvider component that wraps our app in the context
export function UserProvider(props) {
    // Creating the state in here instead of in the login page
    const [username, setUsername] = useState('');

    // The values that are given to the components
    const value = { username, setUsername };

    // Gives us the provider which allows other components access to the values
    // props.children represents every rendered component (login page, favorites page, etc).
    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}