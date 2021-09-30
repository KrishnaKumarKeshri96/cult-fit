import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import {
  BCrumbs,
  Calories,
  ContentDiv,
  PosterDiv,
  PosterImg,
  WrapperDiv,
} from "../Styled/Styles";

export const ClassBooking = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      <Calories>cult.fit</Calories>
    </Link>,
    <Calories>Cult Abids</Calories>,
  ];
  return (
    <>
      <WrapperDiv>
        <PosterDiv>
          <PosterImg
            alt="store"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_485,ar_485:605,c_fit/dpr_2/v1/cult-media/v2web/centers/226_Cult_Habsiguda_PRODUCT_BNR_2020-05-17T12%25253A12%25253A12.704Z.jpeg"
          ></PosterImg>
        </PosterDiv>

        <ContentDiv>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <img
                alt="loc"
                src="https://static.cure.fit/assets/images/location_icon.svg"
              />
            </div>
            <div style={{ marginRight: "5px" }}>Cult Abids</div>

            <div>
              <img
                alt="opt"
                src="https://static.cure.fit/assets/images/down-arrow-icon.svg"
              ></img>
            </div>
          </div>
          <BCrumbs>
            <Breadcrumbs
              // separator={<NavigateNextIcon fontSize="small" />}
              separator={<Calories> > </Calories>}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </BCrumbs>
        </ContentDiv>
      </WrapperDiv>
    </>
  );
};
