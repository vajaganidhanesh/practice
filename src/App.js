import { useEffect, useRef, useState} from 'react';

import './App.css';
import Data from './data';

function App() {

let [validate,setValidate] = useState([])
let btn = useRef();

useEffect(()=>{
  fetch('../validations.json')
  .then((response)=>response.json())
  .then((data)=>{

    setValidate(data)
    
  
  })
  .catch((err)=>{
    console.log(err);
  })
},[])

function extractData()
{
    fetch('../data.json')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })

    .catch((err)=>{
    console.log(err);
    })
  
}


function setUpField(value,field){
  if(field==='name')
  {
    validate[0].value = value;
    checkStatus(validate[0])
    
  }
  if(field==='email')
  {
    validate[1].value = value;
    checkStatus(validate[1])
    
  }
  if(field==='password')
  {
    validate[2].value = value;
    checkStatus(validate[2])
    
  }
  let filteredFields = validate.filter(function(obj,index){
    return obj.isValidated === true;
})

if(filteredFields.length === validate.length)
{
    // document.getElementById("btn").disabled = false;
    btn.current.disabled = false;
    document.getElementById("btn").style.cursor = "pointer";
    
}
else
{
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.cursor = "not-allowed";
}
}
function checkStatus(fieldData){
  console.log(fieldData);
  let status = validateField(fieldData.value,fieldData.exp);
  if(status!==true)
  {
      let message = null;
      if(status === 1)
      {
          message = fieldData.emptyError;
      }
      else if(status === 2)
      {
      message= fieldData.patternError;
      }
      document.getElementById(fieldData.displayID).innerText=message;
      document.getElementById(fieldData.displayID).style.display="flex";
      fieldData.isValidated=false;
  }
  else
  {
      document.getElementById(fieldData.displayID).style.display="none";
      fieldData.isValidated=true;
  }
}

function validateField(value,exp)
{
    let pattern = new RegExp(exp);

    if(value ==="")
    {
        return 1;
    }
    else
    {
        if(pattern.test(value)===false)
        {
            return 2;
        }
    }

    return true;
}
  

  return (
    <div className="App">
        <div className="main_container">
            <div className="container">
                <div className="inps">
                    <input type="text" placeholder="Enter name" onKeyUp={(event)=>{
                        setUpField(event.target.value,"name")
                    }} name="" id="" />
                    <div className="tooltip" id="name_err">
                        slflskdf
                    </div>
                </div>

                <div className="inps">
                    <input type="email" placeholder="Enter email" onKeyUp={(event)=>{
                        setUpField(event.target.value,"email")
                    }} name="" id=""/>
                    <div className="tooltip" id="email_err">
                        slflskdf
                    </div>
                </div>

                <div className="inps">
                    <input type="password" placeholder="Enter password" onKeyUp={(event)=>{
                        setUpField(event.target.value,"password")
                    }} name="" id=""/>
                    <div className="tooltip" id="password_err">
                        slflskdf 
                    </div>
                </div>

                <button id="btn" ref={btn} onClick={()=>{
                    extractData()
                }} >submitt</button> 
            </div>
        </div>
        <Data/>
    </div>
  );
}

export default App;
