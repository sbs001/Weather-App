import { DELETE_CITY, GET_CITY } from "../actions/actions";

const InitialState = {
    cities: [],
    initial: true,
};

export default function rootReducer(state = InitialState, action) {

    if (action.type === GET_CITY) {
        return {
            ...state,
            initial: false,
            cities: state.cities.find(c => c.name === action.payload.name) ? [...state.cities] : [...state.cities, action.payload]
        }
    }

    if (action.type === DELETE_CITY)
        return {
            ...state,
            cities: state.cities.filter(city => city.name !== action.payload)
        }

    return state;
}