import React, { Fragment } from 'react';
import Header from './commponents/Header'
import Productos from "./commponents/Productos";
import NuevoProducto from "./commponents/NuevoProducto";
import EditarProducto from "./commponents/EditarProducto";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header />
          <div className="container mt-5">
            <Switch>
                <Route exact path="/" component={Productos} />
                <Route exact path="/productos/nuevo" component={NuevoProducto} />
                <Route exact path="/productos/editar/:id" component={EditarProducto} />
            </Switch>
          </div>
        </Provider>
    </Router>
  );
}

export default App;
