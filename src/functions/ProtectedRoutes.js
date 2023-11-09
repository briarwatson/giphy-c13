import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import FavoritesPage from '../pages/FavoritesPage';
import { useUserContext } from '../context/UserContext';
import { Navigate } from 'react-router';

const authenticate = (Component, requiresUser) => {
    return (props) => {
        // Gets the user from the UserContext
        const { user } = useUserContext();

        // If the page requires a user, redirect them to login, otherwise go to search
        const redirect = requiresUser ? '/login' : '/search';

        // If the page doesn't require a user and there is no user, then they're authorized
        // OR if the page requires a user and there is a user, then they're also authorized
        const authorized = (!requiresUser && !user) || (requiresUser && user);

        // If they are authorized, just give them the component they're trying to go to.
        if (authorized) {
            return <Component {...props} />
        }

        // Otherwise, if they're not authorized, redirect them to either /login or /search
        return <Navigate to={redirect} />
    }
}

// Wrap our components in this authenicate function
export const LoginPageWithAuth = authenticate(LoginPage, false);
export const SearchPageWithAuth = authenticate(SearchPage, true);
export const FavoritesPageWithAuth = authenticate(FavoritesPage, true);