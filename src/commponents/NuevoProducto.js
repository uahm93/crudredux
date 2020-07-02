import React, { useState }from "react";
import { useDispatch, useSelector } from 'react-redux';
//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';
import { mostrarAlerta } from '../actions/alertaActions';

// history Componente de router-dom que esta disponible
const NuevoProducto = ({history}) => {

    //State del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);


    //Usar use dispatch y te crea una funcion
    const dispatch = useDispatch(); 

    //Acceder al state del store siempre se usa useselector para acceder al state
    const cargando = useSelector( state => state.productos.loading);
    const error = useSelector( state => state.productos.error);
    const alerta = useSelector( state => state.productos.alerta);

    //Mandar llamar el action de productoAction
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    //Cuadno usuario hatga submit
    const newProducto = e => {
        e.preventDefault();
        if(nombre.trim() === '' || precio <= 0){
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch( mostrarAlerta(alerta) );
            return;
        }

        agregarProducto({
            nombre,
            precio
        });

        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                        <form
                            onSubmit={newProducto}
                        >
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="nombre del producto" 
                                    name="nombre"
                                    value={nombre}
                                    onChange={ e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Precio" 
                                    name="precio"
                                    value={precio}
                                    onChange={ e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block"> Agregar </button>
                        </form>
                        {cargando ? <p>Cargando</p> : null }
                        {error ? <p className="alert alert-danger p2">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;