import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import { IconContext } from "react-icons";
import Login from '../login/login';
import mask_group from "../../assets/images/Mask_Group 28.png";
import TrackOrder from "../trackorder/TrackOrder";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false,
      trackOrder: false
    };
  }
  render() {
    return (
      <IconContext.Provider value={{ color: "black" }}>
        <div class="bg-seashell-peach-500 w-full h-auto">
          <div class="relative px-10 w-full flex justify-between pt-7 pb-4">
            <div class="relative w-1/4">
              {/* <div class="z-10 border border-primary h-auto absolute bg-white w-full rounded-lg">
                    <div class="my-12 mx-5">
                        <p>Hello</p>
                        <p>Hi</p>
                    </div>
                </div> */}
              <input
                type="text"
                name="product_search"
                id="product_search"
                placeholder="Search for anything"
                class="focus:ring-1 z-20 absolute focus:ring-copperfield-500 focus:outline-none h-9 px-5 bg-givry-500 ml-1 md:ml-2 lg:ml-3 w-11/12 rounded-lg"
              />
              <button
                type="submit"
                class="w-11 h-9 z-20 text-center px-2.5 absolute inline-block rounded-full text-lg top-0 mr-2 right-0 focus:outline-none"
              >
                <AiIcons.AiOutlineSearch />
              </button>
            </div>
            <h1 class="text-3xl">LOGO</h1>
            <div class="p-0 m-0 relative">
              <button class="w-9 h-9 mr-5 text-center focus:outline-none bg-givry-500 pl-2.5 rounded-full"
               onClick={()=>{
                 this.setState({
                  trackOrder: true
                 }
                 )
               }}
              >
                <GoIcons.GoLocation class="text-lg" />
              </button>
              <button class="w-9 h-9 mr-5 text-center focus:outline-none bg-givry-500 pl-2.5 rounded-full"
               onClick={()=>{
                 this.setState({
                  login: true
                 }
                 )
               }}
              >
                <IoIcons.IoIosContact class="text-lg" />
              </button>
              <Link to="/carts">
                <button class="w-9 h-9 text-center focus:outline-none bg-givry-500 pl-2.5 rounded-full">
                  <HiIcons.HiOutlineShoppingBag class="text-lg" />
                </button>
              </Link>
            </div>
          </div>
          <hr class="border-primary "></hr>
          <div class="hidden lg:flex justify-evenly">
            <Link to="/">
              <div class="px-4 pt-4 text-center">
                Home
                <div class="bg-givry-600 h-1 mt-4"></div>
              </div>
            </Link>
            <Link to="/notfound">
              <div class="px-4 pt-4 text-center">
                Notfound
              </div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center dropdown">
                <div class="flex flex-row">
                  Shop
                  <IoIcons.IoIosArrowDown color="#E2886C" class="my-1.5 icon" />
                </div>
                <div class="dropdown-content">
                  <div class="table clear-both px-32 py-10 w-full">
                    <div class="float-left w-8/12">
                      <div class="table clear-both w-full">
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        
                      </div>
                      <div class="table clear-both w-full">
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        <div class="float-left w-1/5 h-auto text-left mr-3 border-b border-primary">
                          <div class=" float-none py-4 px-0 block">
                            <strong>Flowers</strong>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Hurricane</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>

                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Lanters</a>
                          </div>

                          <div class="float-none py-4 px-0 block nested-dropdown">
                            <a class="float-left">Decorative Vases</a>
                            <IoIcons.IoIosArrowDown
                              color="#E2886C"
                              class="my-1.5 mx-0 float-left nested-icon"
                            />
                            <div class="clear-both float-none nested-content">
                              <div class="float-none py-0 px-0 block">
                                <a>Hurricane</a>
                              </div>
                              <div class="float-none py-0 px-0 block">
                                <a>Decorative Vases</a>
                              </div>
                            </div>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Bookends</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Garden Planters</a>
                          </div>
                          <div class="float-none py-4 px-0 block">
                            <a class="float-left">Ornament stands</a>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div class="float-left w-2/12">
                      <div class="float-none py-4 px-0 block">
                        <img src={mask_group} />
                      </div>
                      <div class="float-none py-4 px-0 block">
                        <img src={mask_group} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Flowers</div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Cakes</div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Chocolates</div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Teddy</div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Occassions</div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Relations</div>
            </Link>
            <Link to="#">
              <div class="px-4 py-4 text-center">Combos</div>
            </Link>
          </div>
        </div>
        {(this.state.login)?<Login showBlock={this.state.login} onClick={() => this.setState({login: false})}/>:''}
        {(this.state.trackOrder)?<TrackOrder showBlock={this.state.trackOrder} onClick={() => this.setState({trackOrder: false})}/>:''}
        
      </IconContext.Provider>
    );
  }
}

export default Header;
