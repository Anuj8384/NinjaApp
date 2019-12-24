import React from "react";
// import { Button } from "@material-ui/core/Button";
// import '.Ninja.css'
// import style from './mystyle.module.css';
// import Button from './AddNinja'

const Ninjas = ({ ninjas,deleteNinja }) => {

  //   const ninjaList =
  // return (
  //   <div>
  //     {ninjas.map(x => {
  //       return (
  //         <span align="center" key={x.roll}>
  //           <p>Roll : {x.roll}</p>
  //           <p>Name :{x.name}</p>
  //           <p>Class : {x.class}</p>
  //         </span>
  //       );
  //     })}
  //   </div>
  // );
  // const { ninjas } = this.props;
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20){
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: { ninja.name }</div>
  //         <div>Age: { ninja.age }</div>
  //         <div>Belt: { ninja.belt }</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // });

  return (
    <div className="ninja-list">
      
      {ninjas.length>0 ? ninjas.map(ninja => {
        return ninja.roll > 0 ? (
          <div className="ninja" key={ninja.roll}>
            <p style={{ padding: "10px" }}>Roll : {ninja.roll}</p>
            <p style={{ padding: "10px" }}>Name :{ninja.name}</p>
            <p style={{ padding: "10px" }}>Class : {ninja.class}</p>
            <button style={{height:'25px',marginTop:'20px'}} type="button" onClick={()=>{deleteNinja(ninja.roll)}}>
              Delete
            </button>
          </div>
        ) : null;
      }) : <p>No Record</p> }
    </div>
  );

  //   console.log(ninjaList)

  //   return ninjaList;
};
export default Ninjas;
