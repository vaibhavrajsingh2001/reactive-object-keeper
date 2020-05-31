import React, { useReducer } from 'react';
import axios from 'axios';
import ObjectContext from './objectContext';
import objectReducer from './objectReducer';
import {
    GET_OBJECTS,
    ADD_OBJECT,
    DELETE_OBJECT,
    CLEAR_OBJECTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_OBJECT,
    FILTER_OBJECTS,
    CLEAR_FILTER,
    OBJECT_ERROR
} from '../types';

/*
In state-
objects: an array of all objects of a user
current: the object currently being showed in form to edit
filtered: an array of object to show while user sarches all objects (filtered content)
*/
const ObjectState = (props) => {
    const initialState = {
        objects: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(objectReducer, initialState);

    // Get all objects
    const getObjects = async () => {
        try {
            const res = await axios.get('/api/objects');
            dispatch({ type: GET_OBJECTS, payload: res.data });
        } catch (err) {
            dispatch({ type: OBJECT_ERROR, payload: err.response.msg });
        }
    };

    // Add object
    const addObject = async (object) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/objects', object, config);
            dispatch({ type: ADD_OBJECT, payload: res.data });
        } catch (err) {
            dispatch({ type: OBJECT_ERROR, payload: err.response.msg });
        }
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
                error: state.error,
                getObjects,
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
