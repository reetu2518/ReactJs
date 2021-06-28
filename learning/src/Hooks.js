import React, {useState} from 'react';

function Hooks () {
    
    const [counter, setCount] = useState(70)

    return (
        <div>
            <h3>React Hook {counter}</h3>
            <button onClick={()=>setCount(counter+1)}>Increment</button>
        </div>
    )
}

export default Hooks;