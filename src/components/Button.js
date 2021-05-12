import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.clase}
      onClick={() => props.clicBoton(props?.elemento)}
    >
      <span>{props.etiqueta}</span>
    </button>
  );
};

export default Button;
