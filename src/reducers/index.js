import { combineReducers } from 'redux';
import productosReducer from './productosReducers';
import alertaReducer from './productosReducers';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer

});