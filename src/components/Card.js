import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonIcono from "./ButtonIcono";
import Context from "../core/context/Context";

const Card = (props) => {
  const { addProductToCart } = useContext(Context);

  const clicAddCar = (elemento) => {
    addProductToCart(elemento);
  };

  return (
    <div className="card card-productos" key={props.elemento?.id}>
      <div className="card-body">
        <img
          width="180px"
          height="170px"
          src={props.elemento?.image}
          className="mx-auto d-block"
          alt="producto"
        />
        <p className="card-title">{props.elemento?.title}</p>
        <span className="float-start">{props.elemento?.price} $</span>

        <div className="float-end">
          <ButtonIcono
            clicBoton={clicAddCar}
            elemento={props.elemento}
            key={props.elemento.id}
            icono="fas fa-cart-plus"
          />
        </div>
        <div className="text-center mt-4">
          <Link to={`/detalle/${props.elemento?.id}`}>
            <span href="#" className="btn btn-primary">Ver Más</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
