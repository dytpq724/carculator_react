// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [results,setResults] = useState(0);
  const [num,setNum] = useState(0);
  const [acc_num,setAcc_num] = useState([]);
  const [acc_num_do,setAcc_num_do] = useState([]);
  const [index,setIndex] = useState(0);

  const handleClick = (car_type) => {
    if(num===0){
      return;
    }else if(car_type===1){
      setIndex(index < acc_num.length ? index+1 : index);
    }else if(car_type === 2){
      if(index === 0){
        setAcc_num((currentArray) => [-num, ...currentArray]);
      }else{
        setAcc_num([-num, ...acc_num_do]);
        setIndex(0);
      }
     
    }else if(car_type === 3){
      if(index === 0){
        setAcc_num((currentArray) => [num, ...currentArray]);
      }else{
        setAcc_num([num, ...acc_num_do]);
        setIndex(0);
      }
    }else if(car_type ===4){
      setIndex(index > 0 ? index-1 : index);
    }
  }

  const handlecarculator = () => {
    setResults(acc_num.reduce((acc,cur) =>acc+cur,0))  
  }

  const handlecarculator_do = () => {
    setResults(acc_num_do.reduce((acc,cur) =>acc+cur,0))  
  }
  
  useEffect(()=>{
    console.log(`acc_num : ${acc_num}`)
    handlecarculator();
  },[acc_num])

  useEffect(()=>{
    console.log(`index: ${index}`)
    console.log(`acc_num_do : ${acc_num_do}`)
    
    handlecarculator_do();
  },[acc_num_do])

  useEffect(()=>{
    setAcc_num_do(acc_num.slice(index))
  },[index])

  
  const Handlechange = (event)=>{
    setNum(event.target.valueAsNumber);
  }
  console.log("123123")
  
  return (
    <div className="App">
      <h1>HELLO CARCULATOR!!</h1>
      <div style={{ margin: '0 0 10px 0', padding: '10px', border: '1px solid', width: '100px' }}>
        {results}
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
