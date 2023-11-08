export const SET_USER = "Set User";
export const CLEAR_USER = "Clear User";

export default function userReducer(state, action) {
    switch (action.type) {
        case SET_USER:
            // The action.payload is the data (in this case, user's username)
            return action.payload;
        
        case CLEAR_USER:
            // If they logout, we want to set the user to nothing
            return null;

        default:
            // If the action.type is none of the above, do nothing to the state
            return state;
    }
}