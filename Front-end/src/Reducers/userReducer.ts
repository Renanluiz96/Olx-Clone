export type StateType = {
    email: string;
}

export type ActionType = {
    type: string;
    payload: StateType
}

const initialState: StateType = {
    email:''
}

export default (state = initialState, action: ActionType) => {

    if(action.type == 'SET_EMAIL') {
        return { ...state, email:action.payload.email };
    }

    return state
}