import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import {
  BCrumbs,
  Calories,
  ContentDiv,
  GreenBtn,
  PosterDiv,
  PosterImg,
  SlotDiv,
  Slots,
  SmallBanner,
  SmallBannerImg,
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

          <h3 style={{ textAlign: "left" }}>Safety Guidelines</h3>
          <SmallBanner>
            <SmallBannerImg style={{ marginRight: "20px" }}>
              <img
                style={{ width: "100%", marginRight: "20px" }}
                alt="bnr1"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/cult/attendance_instruction_web.png"
              />
            </SmallBannerImg>
            <SmallBannerImg>
              <img
                style={{ width: "100%" }}
                alt="bnr2"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/icons/cult/center_facility_banner_web.png"
              />
            </SmallBannerImg>
          </SmallBanner>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
          <Slots>
            <SlotDiv>08:00 PM</SlotDiv>
            <SlotDiv>
              <GreenBtn>HRX WORKOUT</GreenBtn>
            </SlotDiv>
          </Slots>
          <hr></hr>
        </ContentDiv>
      </WrapperDiv>
    </>
  );
};
