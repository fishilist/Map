let defaultState = {
    0: {
        lat: 59.84660399,
        lng: 30.29496392,
        zoom: 10
    }
}

const SET_CURRENT_PATH = "SET_CURRENT_PATH";
export const ASYNC_SET_CURRENT_PATH = 'ASYNC_SET_CURRENT_PATH'

export function CurrentPathReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_PATH:
            return {...action.payload}
        default:
            return state;
    }
}

export const setCurrentPath = payload => ({type: SET_CURRENT_PATH, payload})
export const asyncSetCurrentPath = () => ({type: ASYNC_SET_CURRENT_PATH})