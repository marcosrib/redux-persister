import { createActions, createReducer } from 'reduxsauce';
import { takeLatest, all, put, take } from 'redux-saga/effects';



export const { Types, Creators } = createActions({
    addTodo: ['text'],
})

const INITIAL_STATE = {
    todos: []
};


const addTodo = (state = INITIAL_STATE, action) => {
 
    return {
        ...state,
        todos: action.text
    }
}

function* addTodoSaga(action) {
    console.log(action.text);
    yield put(Creators.addTodo(action.text))
    
}

export function* todoActions() {
    yield all([
        takeLatest(Types.ADD_TODO, addTodoSaga),
    ])
}


export default createReducer(INITIAL_STATE, {
    ADD_TODO: addTodo,
})