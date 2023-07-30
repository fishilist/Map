let defaultState = {
    pathOne: [{
        lat: 59.84660399,
        lng: 30.29496392,
        zoom: 10
    }, {
        lat: 59.82934196,
        lng: 30.42423701,
        zoom: 10
    }, {
        lat: 59.83567701,
        lng: 30.38064206,
        zoom: 10
    }],
    pathTwo: [{
        lat: 59.82934196,
        lng: 30.42423701,
        zoom: 10
    }, {
        lat: 59.82761295,
        lng: 30.41705607,
        zoom: 10
    }, {
        lat: 59.84660399,
        lng: 30.29496392,
        zoom: 10
    }],
    pathThree: [{
        lat: 59.83567701,
        lng: 30.38064206,
        zoom: 10
    }, {
        lat: 59.84660399,
        lng: 30.29496392,
        zoom: 10
    }, {
        lat: 59.82761295,
        lng: 30.41705607,
        zoom: 10
    }]
}

export const ADD_PATH = "ADD_PATH";
export const SET_PATH = "SET_PATH";
export const ASYNC_ADD_PATH = "ASYNC_ADD_PATH";
export const ASYNC_SET_PATH = "ASYNC_SET_PATH";

export function PathReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PATH:
            return {...state, ...action.payload}
        case SET_PATH:
            return {...action.payload}
        default:
            return state;
    }
}

export function addPathCreator(payload) {
    return {
        type: ADD_PATH,
        payload: payload
    }
}
export function setPathCreator(payload) {
    return {
        type: ADD_PATH,
        payload: payload
    }
}

export function asyncAddPathCreator(payload) {
    return {
        type: ADD_PATH,
        payload: payload
    }
}
export function asyncSetPathCreator(payload) {
    return {
        type: ASYNC_SET_PATH,
        payload: payload
    }
}