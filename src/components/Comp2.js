import React from "react";

const Comp2 = ({ data }) => {
  return (
    <div>
      <h1>Component 2</h1>
      {data &&
        data.length > 0 &&
        data.map((elem) => {
          return (
            <div key={elem.id}>
              <p> name : {elem.name} </p>
              <p> email : {elem.email} </p>
            </div>
          );
        })}
    </div>
  );
};

export default Comp2;
