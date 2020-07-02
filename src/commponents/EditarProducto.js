import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const EditarProducto = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
    //Nuevo stete de producto
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: ''
    })

    //obtener producto a editar 
    const productoEditar = useSelector(state => state.productos.productoEditar);
    
    useEffect( () => {

        guardarProducto(productoEditar);

    }, [productoEditar]);

    //leer datos de formulario

    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio } = producto;

    const submitEditar = e => {
        e.preventDefault();

        dispatch( editarProductoAction(producto) );
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>

                        <form
                            onSubmit={submitEditar}
                        >
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="nombre del producto" 
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Precio" 
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block"> Guardar cambios </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;