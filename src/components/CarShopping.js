import React, { useContext } from "react";
import Context from "../core/context/Context";
import ButtonIcono from "./ButtonIcono";

const CarShopping = () => {
  const { cars, OpenMyCar, addProductToCart } = useContext(Context);

  const sumar = (elemento) => {
    var myObjcars = {};
      myObjcars = {
        id: elemento.id,
        price: elemento.price,
        title: elemento.title,
        count: elemento.count + 1,
        clean: true,
      }
      addProductToCart(myObjcars)
    };

    const closeCars = (res) => {
      OpenMyCar(res);
    };

    const restar = (elemento) => {
      var myObjcars = {};
      if (elemento.count > 0) {
        console.log("rest")
        myObjcars = {
          id: elemento.id,
          price: elemento.price,
          title: elemento.title,
          count: elemento.count - 1,
          clean: true
        }
        addProductToCart(myObjcars);
      }
      
    };
    return (
      <div className="lista-carrito row">
        <ButtonIcono
          clicBoton={closeCars}
          elemento={"false"}
          posicion="text-end"
          icono="far fa-window-close p-4"
        />
        <h6 className="text-center mt-3">Carrito de compras</h6>

        {cars.length === 0 ? (
          <p className="list-else">Aún no seleccionaste algun producto</p>
        ) : (
          <ul className="list">
            {cars.map((elemento) => {
              return (
                <div key={elemento.id} className="card card-carrito border-1">
                  <div className="card-body">
                    <p className="card-title">{elemento.title}</p>
                    <span className="float-start">{elemento.price * elemento.count} $</span>
                    <span className="float-end">
                      <ButtonIcono
                        clicBoton={sumar}
                        elemento={elemento}
                        posicion="text-end"
                        icono="far fa-plus p-4"
                      />
                      <span>{elemento.count}</span>
                      <ButtonIcono
                        clicBoton={restar}
                        elemento={elemento}
                        posicion="text-end"
                        icono="far fa-minus p-4"
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </ul>
        )}
        <span className="text-end mb-3">
          Total:
        {cars.reduce((elemento, valor) => {
          elemento += valor.price;
          return elemento;
        }, 0)}
        </span>
      </div>
    );
  };

  export default CarShopping;
