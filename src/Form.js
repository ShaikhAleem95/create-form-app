
import React, { useEffect,useState } from 'react';

function Form() {

const data={name:"",email:"",password:""};
const [inputData,setInputData]=useState(data)




const[flag,setFlag]=useState(false)

useEffect(()=>{
  console.log("Registered")
},[flag] )



function handleData(e){
  setInputData({...inputData, [e.target.name]:e.target.value})
 console.log(inputData);
}


function handleSubmit(e){
  e.preventDefault();

  if(!inputData.name||!inputData.email||!inputData.password){
    alert("All fields are mandatory")
  }
  else{
    setFlag(true)

  }

}

  return (
       <>
       <prev>
        {
          (flag)?<h2 className='ui-define'>Hello{inputData.name},Your Registered Succefully</h2>:""
        }
       </prev>
          <form className='container' onSubmit={handleSubmit} >
            <div className='header'>
      
                    <h1>Registration Form</h1>
              </div>       
              <div> 
                          <input type='text' placeholder="Enter Your Name"
                          name="name"
                          value={inputData.name} onChange={handleData}></input>   
                    </div>
                    <div>
                          <input type='text' placeholder="Enter Your email"
                          name="email"
                          value={inputData.email} onChange={handleData}></input> 
                    </div>
                    <div>     
                          <input type='text' placeholder="Enter Your password"
                          name="password"
                          value={inputData.password} onChange={handleData}></input> 
                      </div>
                      
                    <div>    
                          <button type='submit'>Submit</button>
                    </div>              




        </form>
   </>

  


  );
}

export default Form;
