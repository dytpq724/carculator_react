// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [results,setResults] = useState(0);
  const [num,setNum] = useState(0);
  const [acc_num,setAcc_num] = useState([]);
  const [acc_num_do,setAcc_num_do] = useState([]);

  const handleClick = (car_type) => {
    if(num===0){
      return;
    }else if(car_type===1){
      if(acc_num_do.length > 0 && acc_num.length >0){
        setAcc_num_do((currentArray) => [acc_num.splice(0,1), ...currentArray]);
      }else if(acc_num_do.length > 0 && acc_num.length == 0){
        return;
      }else{
        setAcc_num_do(acc_num.splice(0,1));
      }
    }else if(car_type === 2){
      setAcc_num((currentArray) => [-num, ...currentArray]);
      setAcc_num_do([]);
    }else if(car_type === 3){
      setAcc_num((currentArray) => [num, ...currentArray]);
      setAcc_num_do([]);
    }else if(car_type ===4){
      if(acc_num_do.length > 0){
        setAcc_num((currentArray) => [acc_num_do.splice(0,1), ...currentArray]);
      }
    }
  }

  const handlecarculator = () => {
    setResults(acc_num.reduce((acc,cur) =>acc+cur,0))  
  }

  useEffect(()=>{
    handlecarculator();
  },[acc_num])
  
  const Handlechange = (event)=>{
    setNum(event.target.valueAsNumber);
  }
  console.log(`acc_num : ${acc_num}`)
    console.log(`acc_num_do : ${acc_num_do}`)

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
