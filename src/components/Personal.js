import React, { useEffect, useState } from "react";
import "./../style/home.css";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { IoCart } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcart } from "../app/cartSlice";

const Personal = () => {

  const [per, setper] = useState(null);
  const [thumb, setthumb] = useState()
  const { id } = useParams();
  console.log(id)

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((p) => {
        console.log(p.data);
        setper(p.data)
        setthumb(p.data.thumbnail)
      })
  }, [])

  const handleAddToCart = (item) => {
    dispatch(addcart(item));
    console.log(item);
  };

  return (
    per != null && <>
      <Header />
      <div className="con person">
        <div className="row">


          <div className="col-5">
            <div className="box">
              <div className="d-flex">
                <div className="sub_img">
                  {
                    per.images.map((v, i) => {
                      return (
                        <>
                          <img src={v} alt="" className='img-fluid' onClick={() => { setthumb(v) }} />
                          {console.log(v)}
                        </>
                      )
                    })
                  }
                </div>
                <div className="img">
                  <img src={thumb} alt="" style={{ padding: "5px" }} />
                  <div
                    className="d-flex align-items-center"
                    style={{ marginTop: "10px" }}
                  >
                    <div onClick={() => handleAddToCart(per)} className="btn" style={{ marginRight: "15px" }}>
                      <a>
                        <IoCart
                          style={{
                            fontSize: "20px",
                            marginRight: "10px",
                          }}
                        />
                        ADD TO CART
                      </a>
                    </div>
                    <div
                      className="btn"
                      style={{ backgroundColor: "#FB641B" }}
                    >
                      <a>
                        <ImPower
                          style={{
                            fontSize: "20px",
                            marginRight: "10px",
                          }}
                        />
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div
              className="box"
              style={{ marginTop: "20px", height: "100%" }}
            >
              <div className="content m-0">
                <h1>{per.title}</h1>
                <div className="d-flex align-items-center">
                  <h3>₹{per.price}</h3>
                  <div className="discount ms-5">{per.discountPercentage}% Off</div>
                </div>
                <div className="rating mb-4">
                  <p className="mb-0">
                    {per.rating}
                    <FaStar style={{ margin: "-5px 0 0 3px" }} />
                  </p>
                </div>
              </div>
              <div className="desc mb-2">{per.discountPercentage}</div>
              <div className="title d-flex align-items-center ">
                <div className="text">Stock</div>
                <p className="sub mb-0 p-0">{per.stock}</p>
              </div>
              <div className="title d-flex  align-items-center ">
                <div className="text">Brand</div>
                <p className="sub mb-0 p-0">{per.brand}</p>
              </div>
              <div className="title d-flex align-items-center ">
                <div className="text">Category</div>
                <p className="sub mb-0 p-0">{per.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
