import {
    OCULTAR_ALERTA,
    MOSTRAR_ALERTA
} from '../types/index';

//caada reducer tiene su state

const initialState = {
    alerta: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
        default:
            return state;
    }
}