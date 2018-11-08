import routesReducer from './routesReducer';
import remedyReducer from './remedyReducer';
import searchReducer from './searchReducer';
import utilReducer from './utilsReducer';
import {  combineReducers } from 'redux';


export default rootReducer = combineReducers({
    routes: routesReducer,
    remedy:remedyReducer,
    search:searchReducer,
    utils:utilReducer,
});