import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    console.log(res);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
        <div className="col-3">
            <div
            className="card"
            key={post.id}
          >
            <div className="card-body">
              <img width="100%" src={post.image} />
              <p>{post.title}</p>
                <span className="float-start">
                  {post.price} $
                </span>
                <a className="float-end"><i className="fas fa-cart-plus"></i></a>
            </div>
        </div>
        </div> 
    );
  });

  return (
    <div className="container row">
      {renderedPosts}
    </div>
  );
};
export default ProductList;