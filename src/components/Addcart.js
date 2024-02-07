import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './../style/home.css'
import Header from './Header';
import {Table,Button} from 'react-bootstrap';
import { decrement, increment, remove } from '../app/cartSlice';

const Addcart = () => {
    const cart = useSelector(state => state.cart.cartitems);
    const price = useSelector(state => state.cart.price);
    const total = useSelector(state => state.cart.total);
    const discount = useSelector(state => state.cart.dis);
    const amount = useSelector(state => state.cart.amt);
    const dispatch = useDispatch();
    console.log(cart);

    return (
        <div>

            <Header />


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Qty</th>
                        <th>Total Amount</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((ele, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{ele.id}</td>
                                        <td>{ele.title}</td>
                                        <td><img width={"100px"} src={ele.thumbnail} alt="" /></td>
                                        <td>₹ {ele.price}</td>
                                        <td>{ele.discountPercentage}%</td>
                                        <td>
                                            <button className='circle' onClick={() => dispatch(decrement(ele.id))}>-</button>
                                            {ele.qty}
                                            <button className='circle' onClick={() => dispatch(increment(ele.id))}>+</button>
                                        </td>
                                        <td>{ele.price * ele.qty}</td>
                                        <td><Button variant="danger" onClick={() => dispatch(remove(ele.id))}>Remove</Button></td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </Table>

            <div className="col-5 mt-5 detail">
                <div className="box1">
                    <div className='title'>Price Details</div>
                    <div className="price">
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                            <div>Price</div>
                            <div>₹{price}</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                            <div>Discount</div>
                            {/* <div style={{ color: "#388E3C" }}>- ₹{discount.toFixed(2)}</div> */}
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                            <div>Delivery Charges</div>
                            <div style={{ color: "#388E3C" }}>Free</div>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                            <div>GST</div>
                            <div></div>
                        </div> */}
                        <div className="amt">
                            <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                                <div style={{ fontSize: "18px", fontWeight: "500" }}>Payable Bill</div>
                                <div style={{ fontSize: "18px", fontWeight: "500" }}>₹{amount}</div>
                            </div>
                        </div>
                        <p className='mt-2'>You will save ₹{discount.toFixed(0)} on this order</p>
                    </div>
                </div>
            </div>

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
