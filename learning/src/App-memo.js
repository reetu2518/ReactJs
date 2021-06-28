// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Memo from './Memo';

// function App () {
//     return (
//         <div>
//             <h1>Error boundry</h1>
//         </div>
//     )
// }

const App = () => {
    const[count,setCount]=useState(0)
    const[data,setData]=useState(10)
    return (
        <div>
             <h1>Memo wth react</h1>
             <h3>Count  {count}<br></br>
             Data {data}</h3>
             <Memo data={data}/>
             <button onClick={()=>setCount(count+1)}>Click me</button>
             <button onClick={()=>setData(data+1)}>Click me for update data</button>
        </div>
    )
}
export default App;