import React from "react";
import "./style.css";

function Vehicles({ twoWheeler }) {
  return (
    <>
      <div>
        {twoWheeler.map((item) => (
          <div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Vehicles;
