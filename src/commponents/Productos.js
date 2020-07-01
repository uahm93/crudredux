import React, { Fragment } from "react";


const Productos = () => {
    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table class="table table-striped">
                <thead class="bg-primary table-dark">
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Precio del producto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
            </table>
        </Fragment> 
    )
}

export default Productos;