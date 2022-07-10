import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [value,setValue]= useState('chittoor');
  let [values,setValues]= useState('andhra pradesh');


  function onChange()
  {
    setValue('bangarupalyam');
    console.log(value);
  }
  function onChanges()
  {
    setValues('chennai');
    console.log(values);
  }


  useEffect(()=>{
    console.log("its an side effect function or hook");
    return (()=>{
      console.log("after un mount");
    })
  },[value])
  return (
    <div className="App">
      <h1>app component</h1>
      <div>{value}</div>
      <button onClick={onChange}>click</button>

      <div>{values}</div>
      <button onClick={onChanges}>click</button>
    </div>
  );
}

export default App;
