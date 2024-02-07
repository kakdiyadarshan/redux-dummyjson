import React, { useEffect, useState } from 'react'
import './../style/home.css'
import axios from 'axios'

const Left = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/product/categories')
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    return (
        <div>

            <div className="left">
                <ul className='ps-0'>
                    {
                        data.map((ele, index) => {
                            return (
                                <>
                                    <li><a href="">{ele}</a></li>

                                </>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Left
