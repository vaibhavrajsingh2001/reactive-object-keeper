import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ObjectContext from './objectContext';
import objectReducer from './objectReducer';
import {
    ADD_OBJECT,
    DELETE_OBJECT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_OBJECT,
    FILTER_OBJECTS,
    CLEAR_FILTER,
} from '../types';

/*
In state-
objects: an array of all objects of a user
current: the object currently being showed in form to edit
filtered: an array of object to show while user sarches all objects (filtered content)
*/
const ObjectState = (props) => {
    const initialState = {
        objects: [
            {
                id: 1,
                name: 'specs',
                location: 'Inside bag',
                extras: 'Keep it in the dabba',
            },
            {
                id: 2,
                name: 'laptop',
                location: 'In office',
                extras: 'Keep it with charger',
            },
            {
                id: 3,
                name: 'diary',
                location: 'On bed rack',
                extras: 'Keep it with bookmark intact',
            },
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(objectReducer, initialState);

    // Add object
    const addObject = (object) => {
        object.id = uuidv4();
        dispatch({ type: ADD_OBJECT, payload: object });
    };

    // Delete object
    const deleteObject = (id) => {
        dispatch({ type: DELETE_OBJECT, payload: id });
    };

    // Set current object
    const setCurrent = (object) => {
        dispatch({ type: SET_CURRENT, payload: object });
    };

    // Clear current object
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update object
    const updateObject = (object) => {
        dispatch({ type: UPDATE_OBJECT, payload: object });
    };

    // Filter objects
    const filterObjects = (text) => {
        dispatch({ type: FILTER_OBJECTS, payload: text });
    };

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <ObjectContext.Provider
            value={{
                objects: state.objects,
                current: state.current,
                filtered: state.filtered,
                addObject,
                updateObject,
                deleteObject,
                setCurrent,
                clearCurrent,
                filterObjects,
                clearFilter
            }}
        >
            {props.children}
        </ObjectContext.Provider>
    );
};

export default ObjectState;
