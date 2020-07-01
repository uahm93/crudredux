import React, { useState }from "react";
import { useDispatch, useSelector } from 'react-redux';
//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    //State del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);


    //Usar use dispatch y re crea una funcion
    const dispatch = useDispatch(); 

    //Mandar llamar el action de productoAction
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    //Cuadno usuario hatga submit
    const newProducto = e => {
        e.preventDefault();
        if(nombre.trim() === '' || precio <= 0){
            return;
        }

        agregarProducto({
            nombre,
            precio
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;