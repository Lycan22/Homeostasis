import routesReducer from './routesReducer';
import utilReducer from './utilsReducer';
import {  combineReducers } from 'redux';


export default rootReducer = combineReducers({
    routes: routesReducer,
    utils:utilReducer,
});
