const defaultState = {
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

export const SET_PATH = "SET_PATH";
export const ASYNC_SET_PATH = "ASYNC_SET_PATH";

export function PathReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PATH:
            return {...action.payload}
        default:
            return state;
    }
}
//export const setPath = payload => ({type: SET_PATH, payload})
//export const asyncSetPath = () => ({type: ASYNC_SET_PATH})