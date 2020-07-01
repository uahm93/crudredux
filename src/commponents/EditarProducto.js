import React from "react";

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="nombre del producto" 
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Precio" 
                                    name="precio"
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