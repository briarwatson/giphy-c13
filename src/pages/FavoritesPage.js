import { useUserContext } from "../context/UserContext";
import { useFavoritesContext } from "../context/FavoritesContext";

const FavoritesPage = () => {
    const { username } = useUserContext();
    const { favorites } = useFavoritesContext();

    return (
        <div>
            <h1>{username}'s Favorites</h1>
            <h2>{favorites}</h2>
        </div>
    )
}

export default FavoritesPage;