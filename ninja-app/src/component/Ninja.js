import React from "react";
// import '.Ninja.css'
// import style from './mystyle.module.css';

const Ninja = ({ ninja }) => {
  //   const ninjaList =
  return (
    <div>
      {ninja.map(x => {
        return (
          <span align="center" key={x.roll}>
            <p>Roll : {x.roll}</p>
            <p>Name :{x.name}</p>
            <p>Class : {x.class}</p>
          </span>
        );
      })}
    </div>
  );

  //   console.log(ninjaList)

  //   return ninjaList;
};
export default Ninja;
