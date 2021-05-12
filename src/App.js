import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MyProvider } from "./core/context/Context";

import Header from "./components/Header";
import ProductList from "./pages/Product";
import DetailsProducts from "./pages/DetailsProducts";
import Nav from "./components/Nav";
import CarShopping from "./components/CarShopping";

function App() {
  const [cars, setCars] = useState([]);
  const [openCars, setOpenCars] = useState([]);
  var listCar = [];

  const addProductToCart = (elemento) => {
    const myObjCars = {
      id: elemento.id,
      price: elemento.price,
      title: elemento.title,
      count: elemento.count ?  elemento.count: 1,
      clean: false,
    };

    if (cars.length >= 1 ) {
      cars.forEach((resultado, indice) => {
        if (elemento.id === resultado.id  && !elemento.clean) {
          cars.splice(indice, 1);
          cars[indice] = {
            id: resultado.id,
            price: resultado.price,
            title: resultado.title,
            count: resultado.count + 1,
            clean: false
          };
        } else if (elemento.id !== resultado.id && !elemento.clean) {
          cars.push(myObjCars);
        } else if ( elemento.id === resultado.id && elemento.clean){
          cars[indice] = {
            id: elemento.id,
            price: elemento.price,
            title: elemento.title,
            count: elemento.count,
            clean: false
          };
        }
      });
      listCar = [...cars];
    } else {
      cars.push(myObjCars);
      listCar = [...cars];
    }
    var filtro = listCar.filter((res) =>{ 
      return res.count > 0;
   });
    
    setCars(filtro);
  };

  const OpenMyCar = (elemento) => {
    setOpenCars(elemento);
  };

  return (
    <MyProvider
      value={{
        addProductToCart: addProductToCart,
        cars: cars,
        openCars: openCars,
        OpenMyCar: OpenMyCar,
      }}
    >
      <Router>
        <div className="container-fluid">
          <Header />

          <Nav />
          {openCars === true ? <CarShopping /> : ""}
          <Switch>
            <Route path="/productos">
              <div className="container mt-5">
                <ProductList />
              </div>
            </Route>
            <Route path="/detalle/:id">
              <DetailsProducts />
            </Route>
            <Route path="/">
              <h1 className="text-center mt-5">Bienvenido, Mitienda.com</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
