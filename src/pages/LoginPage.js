import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

const LoginPage = () => {
    // State that stores their username
    const [inputUsername, setInputUsername] = useState("");
    // This runs our hook that uses the user context
    // and pulls out the setUsername function so that we can use it in this file.
    const { setUsername } = useUserContext();

    const handleLogin = () => {
        setUsername(inputUsername);
    }

    return (
        <div>
            <h1>Login Page</h1>
            {/* Input for typing in their username/password */}
            <input 
                onChange={e => setInputUsername(e.target.value)}
                type='text'
                placeholder='Username'
            />
            <input 
                type='password'
                placeholder='Password'
            />
            {/* Login button that saves their username */}
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;