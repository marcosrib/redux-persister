import { createActions, createReducer } from 'reduxsauce';
import { takeLatest, all, put, take } from 'redux-saga/effects';



export const { Types, Creators } = createActions({
    addTodo: ['todo'],
    listTodo: ['text'],
})

const INITIAL_STATE = {
    todos: []
};


const listTodo = (state = INITIAL_STATE, action) => {
     console.warn( state);
     
    return {
        ...state,
         todos: action.text
    }
}

function* addTodoSaga(action) {
    yield put(Creators.listTodo(action.todo))

}

export function* todoActions() {
    yield all([
        takeLatest(Types.ADD_TODO, addTodoSaga),
    ])
}


export default createReducer(INITIAL_STATE, {
    LIST_TODO: listTodo,
})