import React, { useState } from 'react'

function Usecaseupdate() {
    const[allvalue,setallvalue]=useState({firstname:"shaikh",lastname:"aleem"})
    function update(){
        setallvalue({...allvalue,firstname:"sk"})
    }
  return (
    <div>
      {<h1>my first name {allvalue.firstname} and second name is {allvalue.lastname}</h1>}
      {<button onClick={update}>update name</button>}
    </div>
  )
}

export default Usecaseupdate;
