/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const { _id, name, image, price, description } = item;
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div className="card shadow-xl relative mr-5 md:my-5">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-red ${isHeartFilled ? "text-rose-500" : "text-white"}`}
                onClick={handleHeartClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
            </div>
            <Link to={`/product/${_id}`}>
                <figure>
                    <img src={image} alt={name} className="hover:scale-105 translate-all duration-300 md:h-72" />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/product/${_id}`}>
                    <h2 className="card-title">{name}</h2>
                </Link>
                <p>{description}</p>
                <div className="card-action justify-between items-center mt-2">
                    <h5 className="font-semibold text-gray-500">฿ {price}</h5>
                    <button className="btn bg-red text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
