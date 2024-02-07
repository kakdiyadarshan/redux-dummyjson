import React, { useEffect, useState } from "react";
import "./../style/home.css";
import Header from "./Header";
import { Container } from "react-bootstrap";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const navigate = useNavigate();
  // const [select, setSelect] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/product/categories")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        console.log(response.data.products);
        setData1(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  const handlecategory = (ele) => {
    console.log(ele);
    axios
      .get(`https://dummyjson.com/products/category/${ele}`)
      .then(function (response) {
        setData1(response.data.products);
        console.log("data", response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSearch = (searchTerm) => {
    axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then(function (response) {
        setSearchResults(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header onSearch={handleSearch} />

      <section style={{ backgroundColor: "#EEF0F3" }}>
        <Container className="m-0">
          <div className="main">
            {searchResults.length > 0 ? (
              <div className='item'>
                {searchResults.map((ele, index) => (
                  <div className='box' key={index}>
                    <div className="d-flex">
                      <div className="img">
                        <img src={ele.thumbnail} alt="" />
                      </div>
                      <div className="content">
                        <div className="d-flex justify-content-between align-items-center">
                          <h1>{ele.title}</h1>
                          <h3>₹{ele.price}</h3>
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
                ))}
              </div>
            ) : (
              <div className="row">
                <div className="col-3">
                  <div className="left">
                    <ul className="ps-0">
                      {data.map((ele, index) => {
                        return (
                          <>
                            <li>
                              <input
                                type="button"
                                onClick={() => handlecategory(ele)}
                                value={ele}
                              ></input>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-9">
                  <div className="item">
                    {data1.map((ele, index) => (
                      <div>
                       <Link to={`personal/${ele.id}`}>
                       <div className="box" key={index}>
                          <div className="d-flex">
                            <div className="img">
                              <img src={ele.thumbnail} alt="" />
                            </div>
                            <div className="content">
                              <div className="d-flex justify-content-between align-items-center">
                                <h1>{ele.title}</h1>
                                <h3>₹{ele.price}</h3>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="rating">
                                  <p className="mb-0">
                                    {ele.rating}
                                    <FaStar style={{ margin: "-5px 0 0 3px" }} />
                                  </p>
                                </div>
                                <div className="discount">
                                  {ele.discountPercentage}% Off
                                </div>
                              </div>
                              <div className="desc mb-2">{ele.description}</div>
                              <div className="title d-flex align-items-center ">
                                <div className="text">Stock</div>
                                <p className="sub mb-0 ps-0">{ele.stock}</p>
                              </div>
                              <div className="title d-flex  align-items-center ">
                                <div className="text">Brand</div>
                                <p className="sub mb-0 ps-0">{ele.brand}</p>
                              </div>
                              <div className="title d-flex align-items-center ">
                                <div className="text">Category</div>
                                <p className="sub mb-0 ps-0">{ele.category}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                       </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
