import React from "react";
import { Link } from "react-router-dom";

const Grid = ({ list }) => {
  return (
    <>
      {list.map((el, i) => (
        <div key={i} className="grid-img">
          <Link to={`/productpage/${el[1]}`}>
            <img className="grid-img-tag" src={el[0]} alt={el[1]} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default Grid;
