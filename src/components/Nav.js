import React, {useContext} from "react";
import { Link } from "react-router-dom";

import Context from "../core/context/Context";

import Button from "./Button";
import Logo from "../logo.svg";

const Nav = () => {
  const { cars, OpenMyCar } = useContext(Context);
  const open = () => {
    OpenMyCar(true);
  };
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          MiTienda.com
        </Link>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/productos" className="nav-link active">
                Productos
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Button
              clase="fas fa-cart-plus border-0"
              etiqueta={cars.length}
              clicBoton={open}
            />
          </span>
        </div>

      
      </div>
    </div>
  );
};

export default Nav;
