import React, {useEffect, useState} from 'react';

const Effect=()=> {
    const [count,setCount] = useState(1)
    useEffect(()=>{
        console.warn("count")
    },[count==5])
    return (
        <div>
            <h3>useEffect in Hook.... {count}</h3>
            <button onClick={()=> setCount(count+1)}>Update State</button>
        </div>
    );
};

export default Effect;