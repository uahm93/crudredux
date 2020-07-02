import {
    OCULTAR_ALERTA,
    MOSTRAR_ALERTA
} from '../types/index';

//muestra alerta
export function mostrarAlerta(alerta){
    return (dispatch) => {
        dispatch( crearAlerta(alerta) );
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})