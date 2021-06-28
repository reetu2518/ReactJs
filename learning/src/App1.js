// import logo from './logo.svg';
import './App.css';
// import React, {Component, lazy, Suspense} from 'react';
import React, {useState} from 'react';
// import Uncontrolled from './Uncontrolled';
// import Controlled from './Controlled';
// const Uncontrolled = lazy(()=>import('./Uncontrolled'))
// const About = lazy(()=>import('./About'))

// import FromUpload from './FromUpload';
import customHook from './customHook';

const App = ()=>{
    const [count,setCount] = useState(0);
    customHook(count);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

// class App extends Component {
//     render () {
//         return (
//             <div>
//                 <h2>Lazy loading Example</h2>
//                 {/* <Suspense fallback={<div>Please wait for 1st Component....</div>}>
//                     <Uncontrolled/>
//                 </Suspense>
//                 <Suspense fallback={<div>Please wait for 2nd Component....</div>}>
//                     <About/>
//                 </Suspense>
//                  */}
//                 {/* <FromUpload age={22} name={"reetu"}/> */}
//                 {/* <Controlled/> */}
//             </div>
//         )
//     }
// }


export default App;