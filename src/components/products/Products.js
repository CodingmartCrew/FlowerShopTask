import React, { Component } from "react";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import Path from "../path/Path";
import Cards from "./cards/Cards";
import Filter from "./filter/Filter";

class Products extends Component {
  state = {
    sideDrawerToggleState: false,
  };

  SidedrawerToggel = () => {
    this.setState((preState) => {
      return { sideDrawerToggleState: !preState.sideDrawerToggleState };
    });
  };

  backDrawerToggle = () => {
    this.setState({ sideDrawerToggleState: false });
  };
  render() {
    return (
      <IconContext.Provider value={{ color: "black" }}>
        <Path />
        <Filter show={this.state.sideDrawerToggleState} toggle={this.SidedrawerToggel} />
        <div class="mx-11 mt-0 mb-16">
          <div class="table clear-both w-full px-5 py-5">
            <div onClick={this.SidedrawerToggel} class="float-left cursor-pointer border border-black py-3 px-10 rounded-lg">
              <h1>Filter</h1>
              
            </div>
            <div class="float-right cursor-pointer border border-black p-3 rounded-lg sort-dropdown">
              <a>
                Sort By: <strong>Featured Items
                <IoIcons.IoIosArrowDown color="#E2886C" class="my-1.5 float-right"/></strong>
              </a>
              <div class="sort-dropdown-content left-0 w-full">
                <div class="bg-white border border-black mt-5 rounded-lg">
                  <a class="block px-2 py-0 ">Featured Items</a>
                  <a class="block px-2 py-0 ">Popular Items</a>
                  <a class="block px-2 py-0 ">Price: Low to High</a>
                  <a class="block px-2 py-0 ">Price: High to Low</a>
                </div>
              </div>
            </div>
          </div>
          <Cards />
        </div>
      </IconContext.Provider>
    );
  }
}

export default Products;
