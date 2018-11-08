import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../redux/reducers/index';


const configureStore = () => {
    const middleware = [thunk,logger];
    return createStore(rootReducer, applyMiddleware(...middleware))
};
configureStore().subscribe(()=> {
        console.log(configureStore().getState())
    }
);

export { configureStore };