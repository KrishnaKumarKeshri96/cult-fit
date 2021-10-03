import React from "react";

const Grid = ({ list }) => {
  return (
    <>
      {list.map((el, i) => (
        <div key={i} className="grid-img">
          <img src={el} alt={el} />
        </div>
      ))}
    </>
  );
};

export default Grid;
