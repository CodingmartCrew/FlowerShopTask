import React from 'react';
import '../../App.scss'
import notFound from '../../assets/notfound.png';

const NotFound = () => {
    return (
        <div className="text-center m-10 p-10">
            <img className="m-auto" src={notFound} alt="no product found" width="20%"/>
            <div className=" tracking-wide">
                <h2 className="font-bold text-gray-700">No result found</h2>
                <p className="text-md font-bold text-gray-300" >Tryagain using different spelling or keyword</p>
            </div>
        </div>
    )
}

export default NotFound
