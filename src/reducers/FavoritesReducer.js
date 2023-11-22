export const ADD_FAVORITE = "Add Favorite";

export function favoritesReducer(state, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload];
        
        default: 
            throw new Error("Invalid action");
    }
}