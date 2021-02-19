import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import "./Filter.css";

class Filter extends Component {
  render() {
    let sideBar = "side-bar";
    if (this.props.show) {
      sideBar = "side-bar open border border-primary p-10 overflow-y-scroll";
    }
    return (
      <IconContext.Provider value={{ color: "black" }}>
        <div className={sideBar}>
          <div class="relative">
            <h1>Filters</h1>
            <button class="absolute top-0 right-0 w-9 h-9 focus:outline-none" onClick={this.props.toggle}>
              <AiIcons.AiOutlineClose />
            </button>
            <hr class="border-1 mt-2 clear-both border-primary"></hr>
          </div>
          <div class="h-auto mt-5 mb-5">
            <a class="bg-gray-300 m-1 p-1">
              <strong>Rs.0 - Rs.500</strong>{" "}
              <button>
                X
              </button>
            </a>
            <a class="bg-gray-300 m-1 p-1">
              <strong>Rs.0 - Rs.500</strong> <button>X</button>
            </a>
          </div>
          <a class="cursor-pointer underline">Clear All</a>
          <div class="mt-5">
            <h1>Price</h1>
            <div class=" mt-5">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="0-500"
              />
              <label class="pl-6" for="vehicle1">
                0 - 500
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="501-1000"
              />
              <label class="pl-6" for="vehicle1">
                501 - 1000
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="1001-1500"
              />
              <label class="pl-6" for="vehicle1">
                1001 - 1500
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle4"
                name="vehicle4"
                value="1501-2000"
              />
              <label class="pl-6" for="vehicle1">
                1501 - 2000
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle5"
                name="vehicle5"
                value="2000+"
              />
              <label class="pl-6" for="vehicle1">
                2000 {">"}
              </label>
            </div>
          </div>
          <div class="mt-5">
            <h1>Price</h1>
            <div class=" mt-5">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="0-500"
              />
              <label class="pl-6" for="vehicle1">
                0 - 500
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="501-1000"
              />
              <label class="pl-6" for="vehicle1">
                501 - 1000
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="1001-1500"
              />
              <label class="pl-6" for="vehicle1">
                1001 - 1500
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle4"
                name="vehicle4"
                value="1501-2000"
              />
              <label class="pl-6" for="vehicle1">
                1501 - 2000
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle5"
                name="vehicle5"
                value="2000+"
              />
              <label class="pl-6" for="vehicle1">
                2000 {">"}
              </label>
            </div>
          </div>
          <div class="mt-5">
            <h1>Price</h1>
            <div class=" mt-5">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="0-500"
              />
              <label class="pl-6" for="vehicle1">
                0 - 500
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="501-1000"
              />
              <label class="pl-6" for="vehicle1">
                501 - 1000
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="1001-1500"
              />
              <label class="pl-6" for="vehicle1">
                1001 - 1500
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle4"
                name="vehicle4"
                value="1501-2000"
              />
              <label class="pl-6" for="vehicle1">
                1501 - 2000
              </label>
            </div>
            <div class="mt-3">
              <input
                class="checked:bg-seashell-peach-500"
                type="checkbox"
                id="vehicle5"
                name="vehicle5"
                value="2000+"
              />
              <label class="pl-6" for="vehicle1">
                2000 {">"}
              </label>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
}

export default Filter;
