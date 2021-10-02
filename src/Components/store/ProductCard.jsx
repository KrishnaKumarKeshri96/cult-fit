import React from "react";
import styled from "styled-components";

const ProductCard = ({ name, price, actualPrice, disc, img, category }) => {
  return (
    <ProductDiv>
      <div className="img">
        <img src={img[0]} alt={category} />
      </div>
      <div className="brand">CULTSPORT</div>
      <div className="productTitle">{name}</div>
      <PriceContainer>
        <p className="finalPrice">₹ {actualPrice}</p>
        <p className="listingPrice">₹ {price}</p>
        <p className="discount">{disc}% Off</p>
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
  }

  & .listingPrice {
    color: #9b9b9b;
    text-decoration: line-through;
    font-size: 12px;
  }

  & .discount {
    color: #ff3278;
    font-size: 12px;
  }
`;

const ProductDiv = styled.div`
  margin-top: 20px;

  & .brand {
    color: #000;
    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    text-transform: uppercase;
  }
  & img {
    width: 16vw;
    height: 50vh;
  }

  & .productTitle {
    font-size: 14px;
    width: 16vw;
    line-height: 16px;
    margin-top: 2px;
    color: #9b9b9b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
