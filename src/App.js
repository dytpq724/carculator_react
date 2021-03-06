// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [results,setResults] = useState([0]);
  const [num,setNum] = useState(0);
  const [index,setIndex] = useState(0);

  const handleClick = (car_type) => {
    if(num===0){
      return;
    }else if(car_type===1){
      if(index > 0)setIndex(index-1)
    }else if(car_type === 2){
      if(index < results.length-1){
        setResults([ ...results.slice(0,index+1), results[index]-num]);
      }else{
        setResults((currentArray) => [...currentArray, results[index]-num]);
      }
      setIndex(index+1)
    }else if(car_type === 3){
      if(index < results.length-1){
        setResults([ ...results.slice(0,index+1), results[index]+num]);
      }else{
        setResults((currentArray) => [...currentArray, results[index]+num]);
      }
      setIndex(index+1)
    }else if(car_type ===4){
      if(index < results.length-1){
        setIndex(index+1)
      }
    }
  }
  
  const Handlechange = (event)=>{
    setNum(event.target.valueAsNumber);
  }
  useEffect(()=>{
    console.log("--------------------")
    console.log(`index: ${index}`)
    console.log(`result: ${results}`)
    console.log(`result.length: ${results.length}`)
  },[index])
  
  return (
    <div className="App">
      <h1>HELLO CARCULATOR!!</h1>
      <div style={{ margin: '0 0 10px 0', padding: '10px', border: '1px solid', width: '100px' }}>
        {results[index]}
      </div>
      <button
         onClick = {() => handleClick(1)}
      >undo</button>
      <button
         onClick = {() => handleClick(2)}
      >-</button>
        <input
          onChange = {Handlechange}
          value={num}
          type="number"
          placeholder = "enter the num..."
        />
      <button
         onClick = {() => handleClick(3)}
      >+</button>
      <button
         onClick = {() => handleClick(4)}
      >redo</button>
        
    </div>
  );
}

export default App;
