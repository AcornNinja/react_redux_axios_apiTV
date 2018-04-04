import React from 'react';
import ReactDOM, {render } from 'react-dom';
import  App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import {loadName} from './actions/nameAction';
import {loadSerials} from './actions/serialsAction';
import rootReducers from './reducers/rootReducer';

if (module.hot) {
    module.hot.accept(rootReducers, () => {
        const nextRootReducer = require(rootReducers)
        store.replaceReducer(nextRootReducer)
    });
}

let currentValue;
function handleChange() {
    let previousValue = currentValue;
    currentValue = store.getState().nameReducer;
    if (previousValue !== currentValue) {
        store.dispatch(loadSerials(store.getState().nameReducer));
    }

}

const store = configureStore();
console.log(`dispatch store loadSerials: ${store.getState().nameReducer} `);
store.dispatch(loadSerials(store.getState().nameReducer));
store.subscribe(handleChange);

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root'));
registerServiceWorker();
