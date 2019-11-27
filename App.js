import { Provider } from 'react-redux';
import { store, persistor } from './src/store/'
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'

import Todos from './src/Todos'
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Todos />
      </PersistGate>
    </Provider>

  )
};

export default App;
