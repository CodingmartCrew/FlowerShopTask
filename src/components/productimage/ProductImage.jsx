import React, { useState } from 'react'
// import notfound from '../assets/notfound.png';

const ProductImage = ({img, width, height, notFound}) => {
    const [error, setError] = useState(true)
    return (
        <div>
            <div className='flex justify-center flex-wrap'>
                <img src={img} className="w-screen p-10" alt="not" onError={(e)=>{
                    if(error){
                    setError(false);
                    e.target.src=notFound;
                    }
                }}/>
                {(!error)?<h2 className=" font-bold text-xs text-gray-400">No image found</h2>:''}
            </div>
        </div>
    )
}

export default ProductImage
