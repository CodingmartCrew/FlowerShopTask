import React, { useState } from 'react'

const TrackOrder = () => {
    const [showBlock, setShowBlock] = useState(true);
    return (
        <div className={!showBlock?"hidden":"block"+"z-10 fixed bg-opacity-25 w-screen h-screen absolute top-0 bg-gray-900 "}>
            <div className="w-screen relative sm:w-screen md:w-5/12 lg:w-5/12 bg-gray-100 h-screen">
                <div className="flex justify-center">
                    <div  className="absolute top-3 right-3">
                        <button className="font-bold" onClick={
                            ()=>{setShowBlock(false);}
                        }>
                            &#10005;
                        </button>
                    </div>
                    <div className=" absolute top-10 w-9/12">
                        <nav className="flex space-x-5 font-lora font-bold text-xl">
                            <p>Track your order</p>
                        </nav>
                        <Track />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Track=()=>{
    const [track, setTrack] = useState(true);
    return(
        <div className="my-10">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="relative">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="email" name="mail" id="mail" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="email">Email<sup className="text-red-400">*</sup></label>
                    </div>
                    <div className="relative">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="password" name="password" id="password" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="password">Password<sup className="text-red-400">*</sup></label>
                    </div>
                        <button className="uppercase px-7 py-2 sub-btn rounded-md font-bold text-white text-sm" onClick={()=>setTrack(!track)}>track order</button>
                </form>
                {
                    track?<TrackStatus />:" "
                }
            </div>
        </div>
    )
}
const TrackStatus=()=>{
    return(
        <div className={"py-10 w-full "}>
            <div className="relative flex">
                <div className="progress-track-block bg-gray-200 h-1">
                    <div className="progress-track"></div>
                </div>   
                <div id="step1" className="progress-step is-complete">
                    <span className="text-black">Order <br/>Confirmed</span>
                </div>
                <div id="step2" className="progress-step is-active">
                    <span className="text-black">Order <br/>Shipped</span>
                </div>
                <div id="step3" className="progress-step">
                    {/* <span>Order <br/>Dispached</span> */}
                </div>
                <div id="step4" className="progress-step">
                    {/* <span>Order <br /> Delivered</span> */}
                </div>
            </div>
        </div>
    )
}
export default TrackOrder
