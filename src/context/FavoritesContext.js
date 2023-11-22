import { useState, createContext, useContext, useReducer } from 'react';

const FavoritesContext = createContext(null);

export const useFavoritesContext = () => useContext(FavoritesContext);

export function FavoritesProvider (props) {
    const [favorites, dispatch] = useReducer(favoritesReducer, null);

    function addFavorite(gif) {
        dispatch({ type: ADD_FAVORITE, payload: gif })
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}