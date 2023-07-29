let defaultState = {
    0: {
        lat: 59.84660399,
        lng: 30.29496392,
        zoom: 10
    }
}

const SET_PATH = "SET_PATH";

export function CurrentPathReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PATH:
            return {...action.payload}
        default:
            return state;
    }
}

export function setCurrentPath(payload) {
    return {
        type: SET_PATH,
        payload: payload
    }
}