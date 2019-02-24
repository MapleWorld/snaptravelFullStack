import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './presentation/reducers';
import DataPanel from './ui/containers/data-panel';
import ActionPanel from './ui/containers/action-panel';
import { composeWithDevTools } from 'redux-devtools-extension';

const reduxPromiseMiddleware = applyMiddleware(ReduxPromise);
const reduxThunkMiddleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, composeWithDevTools(reduxPromiseMiddleware, reduxThunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ActionPanel />
            <DataPanel />
        </div>
    </Provider>
    , document.querySelector('.container'));
