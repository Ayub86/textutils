import React from 'react'

export default function Alret(props) {

//   const capitalize = (word)=> {
//         const lower1 = word.toLowerCase();
//         return lower1.charAt(0).toUpperCase() + lower1.slice(1);
//     }
  return (
   props.alret&& <div className={`alert alert-${props.alret.type} alert-dismissible fade show`} role="alert">
      {props.alret.type}: {props.alret.msg}
    
  </div>
  )
}
