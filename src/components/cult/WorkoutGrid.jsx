import React from "react";
import styled from "styled-components";

const workouts = ["Yoga", "Boxing", "S&C", "HRX Workout", "Dance Fitness"];

const WorkoutGrid = () => {
  return (
    <Grid>
      {workouts.map((el, i) => (
        <GridItem key={i}>
          <p>{el}</p>
          <img src={`img/cult/grid${i + 1}.png`} alt={el} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default WorkoutGrid;

//Styled components;
const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
`;

const GridItem = styled.div`
  width: 100%;
  position: relative;

  & p {
    position: absolute;
    z-index: 99;
    padding: 19px;
    width: 15%;
    color: rgb(34, 34, 34);
    font-weight: bold;
    font-size: 20px;
    margin: 0;
  }

  & img {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    border-radius: 5px;
    min-width: 230px;
    min-height: 130px;
  }
`;
