import React, { useEffect, useState } from 'react'
import './../style/home.css'
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const Right = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                console.log(response.data.products);
                setData(response.data.products)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className="item">  
                {
                    data.map((ele, index) => {
                        return (
                            <>
                                <div className="box" key={index}>
                                    <div className="d-flex">
                                        <div className="img">
                                            <img src={ele.thumbnail} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h1>{ele.title}</h1>
                                                <h3>{ele.price}</h3>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="rating">
                                                    <p className='mb-0'>{ele.rating}<FaStar style={{ margin: "-5px 0 0 3px" }} /></p>
                                                </div>
                                                <div className='discount'>{ele.discountPercentage}% Off</div>
                                            </div>
                                            <div className="desc mb-2">{ele.description}</div>
                                            <div className="title d-flex align-items-center ">
                                                <div className="text">Stock</div>
                                                <p className='sub mb-0 ps-0'>{ele.stock}</p>
                                            </div>
                                            <div className="title d-flex  align-items-center ">
                                                <div className="text">Brand</div>
                                                <p className='sub mb-0 ps-0'>{ele.brand}</p>
                                            </div>
                                            <div className="title d-flex align-items-center ">
                                                <div className="text">Category</div>
                                                <p className='sub mb-0 ps-0'>{ele.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Right
