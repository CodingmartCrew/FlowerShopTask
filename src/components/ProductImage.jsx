import React, { useState } from 'react'
// import notfound from '../assets/notfound.png';

const ProductImage = ({img, notFound}) => {
    const [error, setError] = useState(true)
    return (
        <div>
            <img src={img} alt="not" onError={(e)=>{
                if(error){
                setError(false);
                e.target.src=notFound;
                }
            }}/>
        </div>
    )
}

export default ProductImage
