import React, { useState } from "react";
import { useEffect } from "react";
import Home from "./Home";
import { Link } from 'react-router-dom'
import About from "./About";

function Body() {
  let [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((data) => {
        setCart(data);
        // console.log(data);
      });
  }, []);
  //   console.log(cart);
  const clicked=()=>{
    console.log("Clicked on Imagex");
    <Link to='/services'></Link>
  }

  return (
    <div>
      {cart &&
        cart.map((c) => {
          return (
            <div key={c.id}>
           <Link to='/content'>
              <img src={c.image} ></img>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Body;
