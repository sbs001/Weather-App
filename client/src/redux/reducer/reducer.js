import { GET_CITY } from "../actions/actions";

const InitialState = {
    cities: []
};

export default function rootReducer(state = InitialState, action) {

    if (action.type === GET_CITY) {
        return {
            ...state,
            cities: [...state.cities, action.payload]
        }
    }

    return state;
}