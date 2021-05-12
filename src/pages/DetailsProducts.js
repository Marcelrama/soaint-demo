import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Context from "../core/context/Context";
import { GetService } from "../core/services/HtppService";
import Button from "../components/Button";

export default function DetailsProducts() {
  const [listProducts, setProducts] = useState([]);
  const { addProductToCart } = useContext(Context);

  const { id } = useParams();
  const fetchProducts = async (id) => {
    try {
      const data = await GetService(`products/${id}`);
      console.log(data);
      setProducts(data);
    } catch (err) {}
  };

  const clicAddCar = (elemento) => {
    addProductToCart(elemento);
  };

  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <img width="80%" src={listProducts.image} alt="" />
        </div>
        <div class="col-6">
          <h1>{listProducts.title}</h1>
          <p>Descripción:</p>
          <p>{listProducts.description}</p>
          <p className="tag">{listProducts.category}</p>
          <Button
            clase="fas fa-cart-plus border-0 p-2 float-end"
            etiqueta="Agregar al Carrito"
            elemento={listProducts}
            clicBoton={clicAddCar}
          />
        </div>
      </div>
    </div>
  );
}
