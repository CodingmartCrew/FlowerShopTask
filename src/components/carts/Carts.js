import React, { Component } from "react";
import {Link} from "react-router-dom";
import Nocart from "../../assets/images/cart.png";
import Path from "../path/Path";
import Slides from '../slider/Slider';

class Carts extends Component {
  render() {
    return (
      <div>
        <Path />
        <div class="mx-11 px-7 py-20 lg:py-32 border">
          <div class="flex justify-center">
            <img src={Nocart} width="auto" height="auto" />
          </div>
          <div class="flex justify-center mt-5" >
            <div class="text-center">
                <h1 class="font-bold text-lg">Your cart is empty</h1>
                <Link to="/" class="underline text-primary" ><a>Go to shop</a></Link>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-20">
            <h1 class="font-bold text-xl">Your cart is empty</h1>
        </div>
        <Slides />
      </div>
    );
  }
}

export default Carts;
