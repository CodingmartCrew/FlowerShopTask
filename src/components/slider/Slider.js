import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import basket from "../../assets/images/basket.jpg";

class Slides extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div class="mx-11 my-14">
        <Slider {...settings}>
        <Link to="#">
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
          <div class="w-full float-left px-5 py-5">
            <div class="p-15 bg-seashell-peach-500">
              <img src={basket} />
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
        </Slider>
      </div>
    );
  }
}

export default Slides;
