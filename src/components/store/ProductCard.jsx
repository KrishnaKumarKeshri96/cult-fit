import React from "react";
import styled from "styled-components";

const ProductCard = () => {
  return (
    <ProductDiv>
      <div className="img">
        <img src="img/store/p1.jpeg" alt="product" />
      </div>
      <div className="brand">CULTSPORT</div>
      <div className="productTitle">Women's Dumbbell Training Tee</div>
      <PriceContainer>
        <p className="finalPrice">₹ 479</p>
        <p className="listingPrice">₹ 1199</p>
        <p className="discount">60% Off</p>
      </PriceContainer>
    </ProductDiv>
  );
};

export default ProductCard;

////Styled Components;
const PriceContainer = styled.div`
  font-size: 15px;
  line-height: 16px;
  display: flex;

  & p {
    margin: 7px 6px 0 0;
  }

  & .finalPrice {
    color: #242424;
    font-weight: bold;
    font-family: BrandonTextWeb-Bold, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
  }

  & .listingPrice {
    color: #9b9b9b;
    text-decoration: line-through;
    font-size: 12px;
  }

  & .discount {
    color: #ff3278;
    font-size: 12px;
    font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
  }
`;

const ProductDiv = styled.div`
  margin-top: 20px;

  & .brand {
    color: #000;
    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
    text-transform: uppercase;
  }

  & .productTitle {
    font-size: 14px;
    line-height: 16px;
    margin-top: 2px;
    color: #9b9b9b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
