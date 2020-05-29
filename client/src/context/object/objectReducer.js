import {
    ADD_OBJECT,
    DELETE_OBJECT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_OBJECT,
    FILTER_OBJECTS,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_OBJECT:
            return {
                ...state,
                objects: [...state.objects, action.payload]
            };
        case UPDATE_OBJECT:
            return {
                ...state,
                objects: state.objects.map(obj => obj.id === action.payload.id ? action.payload : obj)
            }
        case DELETE_OBJECT:
            return {
                ...state,
                objects: state.objects.filter(obj => obj.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case FILTER_OBJECTS:
            return {
                ...state,
                filtered: state.objects.filter(obj => {
                    // we want to just match the text passed in payload, so regex
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return obj.name.match(regex) || obj.location.match(regex) || obj.extras.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
}