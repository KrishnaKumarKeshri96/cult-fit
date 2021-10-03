import styled from "styled-components";

export const WrapperDiv = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0%;
    margin-right: 0%;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: solid black 2px;

  margin-left: 5%;
  margin-right: 5%;
`;

export const PosterDiv = styled.div`
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 50%;
    margin-top: 0px;
  }
  position: absolute;
  height: 359px;
  width: 538px;
  // border: red dashed 2px;
  margin-top: 70px;
`;

export const PosterImg = styled.img`
  width: 100%;
`;

export const ContentDiv = styled.div`
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 30px;
    padding: 20px;
  }
  // height: 700px;
  // width: 600px;
  // border: green solid 1px;
  float: right;
  margin-left: 620px;
  margin-top: 100px;
`;

export const SubHead = styled.div`
  font-family: BrandonTextWeb-Bold;
  font-size: 30px;
  float: left;
`;

export const ColorBar = styled.div`
  @media (max-width: 768px) {
    display: flex;
    width: 55%;
  }
  display: flex;
  width: 85%;
`;

export const Bars = styled.div`
  height: 10px;
`;

export const Calories = styled.div`
  padding: 10px 0px 5px;
  font-size: 13px;
  // font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
  //   sans-serif;
  color: rgb(136, 142, 158);
  text-align: left;
`;

export const PurpleButton = styled.button`
  background: #997fff;
  font-size: 16px;
  color: white;
  border: none;
  height: 30px;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const BookClass = styled.button`
  @media (max-width: 768px) {
    position: sticky;
    float: left;
    margin-top: 20px;
    margin-left: 20%;
    margin-right: 20%;
    width: 80%;
  }

  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: none;
  border-radius: 20px;
  height: 40px;
  width: 200px;
  font-size: 16px;
  color: white;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

export const MCard = styled.div`
  @media (max-width: 768px) {
    position: relative;
    top: -120px;
    // margin-left: 5%;
    margin-right: 15%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    background: white;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BCrumbs = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SelectCenters = styled.div`
  width: 90%;
  height: 500px;
  display: block;
  z-index: 2;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 98%;
  // background-color: rgba(128, 128, 128, 0.555);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  border-radius: 10px;
  justify-content: center;
`;

export const Cross = styled.img`
  float: right;
  padding-right: 15px;
  padding-top: 15px;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

export const PopDiv = styled.div`
  display: flex;
  flex-direction: row;
  clear: both;
`;
export const MapDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  width: 45%;
  height: 450px;
  // border: solid 2px black;
  margin-left: 50px;
`;
export const CentersDiv = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 450px;
  }
  width: 45%;
  height: 450px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Pink = styled.span`
  float: right;
  padding-right: 10px;
  color: white;
`;
export const Loc = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid #d5d5d5;

  &:hover {
    background: #ececec;
    cursor: pointer;
  }
  &:hover ${Pink} {
    color: #da2c6c;
  }
`;

export const DateCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SmallBanner = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
`;

export const SmallBannerImg = styled.div`
  height: 100px;
  width: 200px;
`;

export const Slots = styled.div`
  display: fflex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SlotDiv = styled.div`
  margin-right: 20px;
  text-align: left;
  font-weight: bold;
`;

export const GreenBtn = styled.button`
  color: #36ba45;
  border: #36ba45 solid 1px;
  height: 40px;
  width: 140px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const DatesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 15%;
  // border: grey 1px solid;

  &:hover {
    cursor: pointer;
  }
`;

export const DatesWrapper = styled.div`
  @media (max-width: 768px) {
    width: 400px;
  }
  display: flex;
  flex-direction: row;
  width: 586px;
  height: 124px;
  // border: grey 1px solid;
`;

export const DayNameDiv = styled.div`
  color: #7a7a7a;
  text-align: center;
`;

export const DayNumDiv = styled.div`
  @media (max-width: 768px) {
    margin-left: 25%;
    margin-right: 25%;
  }

  font-weight: bold;
  margin-left: 33%;
  margin-right: 33%;
  border-radius: 15px;
  padding: 5px;
  color: #7a7a7a;

  &:hover {
    background: #ff3278;
    color: white;
  }
`;

export const DownArrow = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const FilterDiv = styled.div`
  padding-top: 9%;
  margin-left: 5%;
  &:hover {
    cursor: pointer;
  }
`;
