import React from 'react';
import { useSelector } from 'react-redux';
import './../style/home.css'
import Header from './Header';

const Addcart = () => {
    const cart = useSelector(state => state.cart.cartitems);
    console.log(cart);

    return (
        <div>

            <Header />

            {/* <h2>Your Cart</h2> */}
            {/* <div className="container">
                <div className="d-flex">
                    <div className="col-7 mt-5">
                        {cart.map(item => (
                            <div key={item.id} className='cart'>
                                <div className="content d-flex">
                                    <div className="img">
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                    <div className="text">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <div className="d-flex">
                                            <h3>₹{item.price}</h3>
                                            <div className='discount'>{item.discountPercentage}% off</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="num d-flex">
                                    <div className="circle">
                                        <button>-</button>
                                    </div>
                                    <input type="text" value="1" className='number' />
                                    <div className="circle">
                                        <button>+</button>
                                    </div>
                                    <div className="remove">
                                        <a href="">REMOVE</a></div>
                                </div>
                            </div>
                        ))}
                        <div className="order">
                            <div className="button">
                                <a href="">place oreder</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 mt-5 detail">
                        <div className="box1">
                            <div className='title'>Price Details</div>
                            <div className="price">
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                    <div>Price</div>
                                    <div>₹5896</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                    <div>Discount</div>
                                    <div style={{ color: "#388E3C" }}>- ₹5896</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                    <div>Delivery Charges</div>
                                    <div style={{ color: "#388E3C" }}>Free</div>
                                </div>
                                <div className="amt">
                                    <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                        <div style={{ fontSize: "18px", fontWeight: "500" }}>Total Amount</div>
                                        <div style={{ fontSize: "18px", fontWeight: "500" }}>₹899</div>
                                    </div>
                                </div>
                                <p className='mt-2'>You will save ₹58966 on this order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Addcart;
