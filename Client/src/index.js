import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './components/CanteenForm/redux/store';
import reducer, { initialState } from './StateReducer/Reducer';
import { StateProvider } from './StateReducer/StateProvider';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StateProvider>
    , document.getElementById('root'));