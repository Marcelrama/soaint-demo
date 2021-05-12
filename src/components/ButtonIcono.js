import React from "react";

const ButtonIcono = (props) => {
  return (
    <span className={props.posicion}>
      <i 
        className={props.icono} 
        onClick={() => props.clicBoton(props.elemento)}></i>
    </span>
  );
};

export default ButtonIcono;
