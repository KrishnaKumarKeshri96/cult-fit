import React from "react";

const Grid = ({ list }) => {
  return (
    <>
      {list.map((el, i) => (
        <div key={i} className="grid-img">
          <img className="grid-img-tag" src={el[0]} alt={el[1]} />
        </div>
      ))}
    </>
  );
};

export default Grid;
