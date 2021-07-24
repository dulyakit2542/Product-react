import React, { useState, useEffect } from "react";
import { Rating, RatingView } from "react-simple-star-rating";

import "./App.css";
import logo from "./assets/logo.svg";
import star from "./assets/icons/star.svg";
import starFull from "./assets/icons/star-full.svg";

const ProductList = () => {
  const [hasError, setErrors] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://cc-mock-api.herokuapp.com/product")
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div>
      <body style={{ backgroundColor: "#F1F1F1" }}>
        <div className="container">
          <h6 className="mt-5 mb-4">Products({product.length})</h6>
          <div className="col-md-12">
            <div className="row -1">
              {product.map((item, idx) => (
                <div className="col-md-3 mb-4">
                  <div className="card" style={{ borderRadius: "5%" }}>
                    <img
                      key="idx"
                      className="mx-auto d-block"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        objectPosition: "0% 80%",
                        borderRadius: "5%",
                      }}
                      src={item.image_url}
                    />
                    <div className="row -1 mt-3">
                      <div className="col-3">
                        <img
                          style={{
                            marginLeft: "20px",
                            height: "45px",
                            objectFit: "cover",
                            width: "45px",
                            borderRadius: "30%",
                          }}
                          src={item.brand_info["url"]}
                        />
                      </div>
                      <div className="col-9">
                        <h6
                          style={{
                            fontSize: "10.5pt",
                          }}
                        >
                          {item.name}
                        </h6>
                      </div>
                    </div>
                    <div className="row -1">
                      <div className="col-3"></div>
                      <div
                        className="col-4"
                        style={{
                          color: "#939393",
                          fontWeight: "400",
                          fontSize: "9.5pt",
                        }}
                      >
                        Price
                      </div>
                      <div
                        className="col-5"
                        style={{
                          color: "#939393",
                          fontWeight: "400",
                          fontSize: "9pt",
                        }}
                      >
                        Reviews ({item.review["number"]} reviews)
                      </div>
                    </div>
                    <div className="row -1 mb-3">
                      <div className="col-3"></div>
                      <div
                        className="col-4"
                        style={{
                          color: "#ff6f61",
                          fontWeight: "600",
                          fontSize: "11pt",
                        }}
                      >
                        &#xE3F;{item.price}
                      </div>
                      <div
                        className="col-5"
                        style={{
                          color: "#939393",
                          fontWeight: "400",
                          fontSize: "9pt",
                        }}
                      >
                        <Rating
                          size="15px"
                          className="Rating"
                          ratingValue={item.review["rating"]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ProductList;
