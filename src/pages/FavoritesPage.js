import { useUserContext } from "../context/UserContext";

const FavoritesPage = () => {
    const { username } = useUserContext();

    return (
        <h1>{username}'s Favorites</h1>
    )
}

export default FavoritesPage;