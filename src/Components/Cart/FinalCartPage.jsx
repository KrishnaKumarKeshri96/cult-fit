import "./finalcartpage.css";
import { CartData } from "../Context/CartContext";
import { useContext, useState, useEffect } from "react";

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { AppContext } from "../../Contextxts/AppContext";
import { Login } from "../Login/Login";
import Payment from "../Payment";

export const FinalCartPage = () => {
  const { dataM, handleCount } = useContext(CartData);
  // console.log("dataM:", dataM);
  const { isLoggedIn } = useContext(AppContext);
  const [login, setLogin] = useState(true);
  const [payment, setPayment] = useState(true);
  const handleHide = () => {
    setLogin(true);
  };

  const [totalPrice, setTotalprice] = useState(0);
  // console.log("totalPrice:", totalPrice);
  const [actualPay, setActualpay] = useState(0);
  // console.log("actualPay:", actualPay);
  const [discount, setDiscount] = useState(0);
  // console.log("discount:", discount);
  const [counter, setCounter] = useState(true);

  useEffect(() => {
    let priceT = 0;
    let actualP = 0;
    dataM.forEach((e) => {
      priceT += e.price * e.total;
      actualP += e.actualPrice * e.total;
    });
    setTotalprice(priceT);
    setActualpay(actualP);
    setDiscount(priceT - actualP);
  }, [dataM, counter]);

  return (
    <>
      <Login hide={login} handleHide={handleHide} />
      <Payment
        hide={payment}
        setHide={setPayment}
        total={actualPay}
        item={"Cart Value"}
      />
      <Navbar></Navbar>
      {dataM.length === 0 || (dataM.length === 1 && dataM[0].total === 0) ? (
        <h1
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            margin: "200px",
          }}
        >
          YOUR CART IS EMPTY
        </h1>
      ) : (
        <div className="cart">
          <div className="cart__left">
            <div className="cart__left__product">
              <h3 style={{ marginBottom: "30px" }}>Cultgear Order Summary</h3>
              {dataM
                .filter((e) => {
                  return e.total !== 0;
                })
                .map((e) => (
                  <>
                    <div key={e._id} className="cart__left__product__order">
                      <div className="cart__left__product__order__desc">
                        <img src={e.img} alt="product" />
                        <div className="order__desc">
                          <h4>CULTSPORT</h4>
                          <p>{e.name}</p>
                          <p>Size: {e.size}</p>
                          <div className="order__cost">
                            <h4>&#8377; {e.actualPrice}</h4>
                            <div
                              className="order__cost__btn"
                              id="order__cost__btn"
                            >
                              {/* PLEASE DON'T DELETE THE EMPTY DIVS INSIDE THIS */}
                              <div></div>
                              <button
                                style={{ padding: "10px", cursor: "pointer" }}
                                onClick={() => {
                                  handleCount(e, -1);
                                  setCounter(true);
                                }}
                              >
                                -
                              </button>{" "}
                              <div></div> <h5>{e.total}</h5> <div></div>{" "}
                              <button
                                style={{ padding: "10px", cursor: "pointer" }}
                                onClick={() => {
                                  handleCount(e, 1);
                                  setCounter(true);
                                }}
                              >
                                +
                              </button>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div className="cart__left__product__order__cross"></div>
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}></div>
                  </>
                ))}

              <hr />
            </div>
          </div>
          <div className="cart__mid"></div>
          <div className="cart__right">
            <div className="cart__right__address">
              <img
                src="https://static.cure.fit/assets/images/locationPink.svg"
                alt="location"
              />
              <h4>Please Add Address</h4>
              <h5>Add/Modify</h5>
            </div>
            <hr />
            <div className="cart__right__purchase">
              <div className="cart__right__purchase__row">
                <h5>Total Price</h5>
                <h5 id="total_price">&#8377; {totalPrice} </h5>
              </div>
              <div className="cart__right__purchase__row">
                <h5>(-) Discount</h5>
                <h5 id="discount">&#8377; {discount} </h5>
              </div>
              <div className="cart__right__purchase__row">
                <h3>Total Payable</h3>
                <h3 id="total_payable">&#8377; {actualPay} </h3>
              </div>
              <div className="cart__right__purchase__row_last">
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    isLoggedIn ? setPayment(false) : setLogin(false);
                  }}
                  className="cart__right__purchase__row__button"
                >
                  Pay and Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </>
  );
};
