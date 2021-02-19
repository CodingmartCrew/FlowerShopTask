import React, { useState } from 'react';
import fb from '../assets/Register/fb.svg';
import google from '../assets/Register/google.svg';
import twitter from '../assets/Register/twitter.svg';
const Login = () => {
    const [showBlock, setShowBlock] = useState(true);
    const [login, setLogin] = useState(true);
    return (
        <div className={!showBlock?"hidden":"block"+"z-10 fixed bg-opacity-25 w-screen h-screen absolute top-0 bg-gray-900 "}>
            <div className="w-screen relative sm:w-screen md:w-5/12 lg:w-5/12 bg-gray-100 h-screen">
                <div className="flex justify-center">
                    <div  className="absolute top-5 right-10">
                        <button className="font-bold" onClick={
                            ()=>{setShowBlock(false);}
                        }>
                            &#10005;
                        </button>
                    </div>
                    <div className=" absolute top-10 w-10/12">
                        <nav className="flex space-x-5 font-lora font-bold text-xl">
                            <span className={login?"active":""+"text-gray-400"} onClick={()=>{
                                setLogin(true)
                            }} 
                            >Log in</span>
                            <span className={!login?"active":""+"text-gray-400"} onClick={()=>{
                                setLogin(false)
                            }} 
                            >Register</span>
                        </nav>

                    {
                        login?<Logins />:<Register />
                    }
                        <div className="flex justify-evenly">
                            <div className="rounded-md flex w-auto px-4 py-1 justify-evenly text-xs text-black border-2 border-gray-200">
                                <img className="pr-2" src={google} alt="google" width="26px"/>
                                <button className="uppercase focus:outline-none tracking-wider">google</button>
                            </div>
                            <div className="rounded-md flex w-auto px-4 py-1 justify-evenly text-xs text-black border-2 border-gray-200">
                                <img className="pr-1" src={fb} alt="fb" width="26px"/>
                                <button className="uppercase focus:outline-none tracking-wider">facebook</button>
                            </div>
                            <div className="rounded-md flex w-auto px-4 py-1 justify-evenly text-xs text-black border-2 border-gray-200">
                                <img className="pr-1" src={twitter} alt="twitter" width="26px"/>
                                <button className="uppercase focus:outline-none tracking-wider">twitter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Logins=()=>{
    return(
        <div className="my-10">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="relative mb-5">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="email" name="mail" id="mail" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="email">Email<sup className="text-red-400">*</sup></label>
                    </div>
                    <div className="relative">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="password" name="password" id="password" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="password">Password<sup className="text-red-400">*</sup></label>
                    </div>
                    <div className="flex justify-between pb-2">
                        <div className="flex whitespace-nowrap w-3/12">
                            <input className="p-20" type="checkbox" name="remember" id="remember"/>
                            <span className="text-xs relative bottom-0.5">Remember me</span>
                        </div>
                        <div className="flex">
                            <a href="#" className="text-xs orange capitalize underline">forgot password?</a>
                        </div>
                    </div>
                        <button className="uppercase px-7 py-2 sub-btn rounded-md font-bold text-white text-sm" type="submit">log in</button>
                </form>
                <h2 className="text-center text-xs text-gray-400">Or <span>log in using</span></h2>
            </div>
        </div>
    )
}

const Register=()=>{
    return(
        <div className="my-10">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="relative mb-5">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="text" name="name" id="name" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="name">Full name<sup className="text-red-400">*</sup></label>
                    </div>
                    <div className="relative mb-5">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="email" name="mail" id="mail" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="email">Email<sup className="text-red-400">*</sup></label>
                    </div>
                    <div className="relative">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="password" name="password" id="password" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="password">Password<sup className="text-red-400">*</sup></label> 
                    </div>
                    <button className="uppercase px-7 py-2 sub-btn rounded-md font-bold text-white text-sm" type="submit">sign up</button>
                </form>
                <h2 className="text-center text-xs text-gray-400">Or <span>register using</span></h2>
            </div>
        </div>
    )
}

export default Login
