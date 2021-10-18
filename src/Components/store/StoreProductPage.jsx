import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import "./storepage.css";

export const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://secure-plateau-49386.herokuapp.com/product/productMain/${id}`
      )
      .then((data) => {
        setProduct(data.data);
      });
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="products_section">
        <div className="container">
          <h2 className="heading">{id}</h2>
          <div className="products">
            {product.map((e) => (
              <Link key={e._id} to={`/landing/${e._id}`}>
                <div className="product">
                  <img src={e.img[0]} alt="" />
                  <h4>CULTSPORT</h4>
                  <p>{e.name}</p>
                  <div>
                    <p>₹{e.actualPrice}</p>
                    <p>₹{e.price}</p>
                    <p>{e.disc}% Off</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
