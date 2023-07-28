let defaultState = {}

const CASE_ONE = "CASE_ONE";

export function FooReducer(state = defaultState, action) {
    switch (action.type) {
        case CASE_ONE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export function Foo(payload) {
    return {
        type: CASE_ONE,
        payload: payload
    }
}