import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import EditarProducto from '../commponents/EditarProducto';

// crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() )

        try {
            //insetar en api
            await clienteAxios.post('/productos', producto);

            //si todo sale bien actualizar el state
            dispatch( agregarProductoExito(producto) );

            Swal.fire(
                'Correcto', 
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            console.log(error);
            dispatch( agregarProductoError(true) );

            Swal.fire({
                icon: 'error', 
                title: 'Hubo un error',
                text: 'Hubo un error'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
})

//Si se guardaa en bd
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//Si hay errores

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//Funcion que descarga los producots de BD

export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
           const respuesta = await clienteAxios.get('/productos');
           dispatch( descargProdcutosExitosa(respuesta.data) );
        } catch (error) {
            dispatch( descargProdcutosError() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargProdcutosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargProdcutosError = productos => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})


//Selecciona y elimina el producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch( obtenerProductoEliminar(id) );
        try {
            await clienteAxios.delete('/productos/'+id);
            dispatch( eliminarProductoExito() );


            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

        } catch (error) {
            dispatch( eliminarProductoError() );
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

//Colocar producto en edicion

export function obtenerProductoEditar(producto){
    return async (dispatch) => {
        dispatch( obtenerProductoActionEditar(producto) );
    }
}

const obtenerProductoActionEditar = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

//Edita un registro en la api y state
export function editarProductoAction(producto){
    return async (dispatch) => {

        dispatch( editarProducto() );

        try {
            await clienteAxios.put('/productos/'+producto.id, producto);

            dispatch( editarProductoExito(producto) );
            
        } catch (error) {
            
        }

    }
}

const editarProducto = producto => ({
    type: COMENZAR_EDICION_PRODUCTO,
})

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})
