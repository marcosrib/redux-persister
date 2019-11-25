import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-community/async-storage'
import reducers from './ducks';
import sagas from './ducks/sagas'
const sagaMiddleware = createSagaMiddleware();
/*  
export default createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
*/

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

let persistor = persistStore(store)


export { store,persistor }

  sagaMiddleware.run(sagas)


