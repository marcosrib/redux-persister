
import { all } from 'redux-saga/effects';
import { todoActions } from './todoSagas'
export default function* rootSaga() {
	yield all([     
        todoActions()
	])
}