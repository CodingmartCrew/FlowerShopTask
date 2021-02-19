import React, { Component } from "react";
import { Link } from "react-router-dom";
import basket from "../../../assets/images/basket.jpg";
import ProductImage from "../../productimage/ProductImage";
import notfound from '../../../assets/notfound.png';

class Cards extends Component {
  render() {
    return (
      <div class="table clear-both">
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <ProductImage img={"basket"} notFound={notfound} />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <img src={basket} width="100%" height="100%" />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 relative bg-seashell-peach-500 ">
              <div class="relative cards">
                <img src={basket} width="100%" height="100%" />
                <div class="out-of-stock absolute w-full bg-white bg-opacity-50 top-0 h-full flex justify-center">
                  <h1 class=" absolute top-1/3 text-3xl text-primary p-2  bg-black h-14 text-center">
                    OUT OF STOCK
                  </h1>
                </div>
              </div>
              <div class="relative">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <img src={basket} width="100%" height="100%" />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <img src={basket} width="100%" height="100%" />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <img src={basket} width="100%" height="100%" />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <img src={basket} width="100%" height="100%" />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>{" "}
        <Link to="#">
          <div class="w-full px-5 py-5 float-left md:w-1/4">
            <div class="p-15 bg-seashell-peach-500 ">
              <img src={basket} width="100%" height="100%" />
              <div class="">
                <p>Pretty Pink Rose Basket made from Bengal Bamboo</p>
                <p>
                  <strong>Rs. 30000</strong>{" "}
                  <span class="line-through">Rs. 30000</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Cards;
