import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { GetService } from "../core/services/HtppService";

export default function Productos() {
  const [listProducts, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await GetService("products");
      setProducts(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {listProducts.map((elemento) => {
          return (
            <div key={elemento.id} className="col-3">
              <Card elemento={elemento} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
