import { useUserContext } from "../context/UserContext";
import { useFavoritesContext } from "../context/FavoritesContext";

const FavoritesPage = () => {
    const { username } = useUserContext();
    const { favorites } = useFavoritesContext();

    return (
        <div>
            <h1>{username}'s Favorites</h1>
            {favorites.map((gif) => (
                <div>
                    <img src={gif} />
                </div>
            ))}
        </div>
    )
}

export default FavoritesPage;