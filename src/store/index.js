import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer,createTransform } from 'redux-persist'
//import AsyncStorage from '@react-native-community/async-storage'
import { createRealmPersistStorage } from "@bankify/redux-persist-realm";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import reducers from './ducks';
import sagas from './ducks/sagas'
const sagaMiddleware = createSagaMiddleware();

const SetTransform = createTransform(
    // transform state on its way to being serialized and persisted.
    (inboundState, key) => {
      // convert mySet to an Array.
      return { ...inboundState, mySet: [...inboundState.mySet] };
    },
    // transform state being rehydrated
    (outboundState, key) => {
      // convert mySet back to a Set.
      return { ...outboundState, mySet: new Set(outboundState.mySet) };
    },
    // define which reducers this transform gets called for.
    { whitelist: ['listTodo'] }
  );

const persistConfig = {
    key: 'root',
    storage: createRealmPersistStorage(),
    stateReconciler: hardSet,
    transforms: [SetTransform]
}

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

let persistor = persistStore(store)


export { store,persistor }

  sagaMiddleware.run(sagas)


