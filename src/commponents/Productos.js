import React, { Fragment, useState, useEffect } from "react";
import Producto from "./Producto";


import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
const Productos = () => {

    const dispatch = useDispatch(); 

    useEffect( () => {
        //Se usa use effect para que sea lo primero en cargar al entrar al componente
        //Se llama la funcion dispatch de los actions
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();

    }, []);

    //Obtener el state

    const productos = useSelector( state => state.productos.productos );
    const error = useSelector( state => state.productos.error );
    const load = useSelector( state => state.productos.loading );

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            { load ? <p className="text-center">Cargando</p> : null }

            <table class="table table-striped">
                <thead class="bg-primary table-dark">
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Precio del producto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        { productos.length === 0 ? 'No hay productos' : (
                            productos.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        ) }
                    </tbody>
            </table>
        </Fragment> 
    )
}

export default Productos;