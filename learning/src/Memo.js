import React, {memo} from 'react';

const Memo = (props) => {
    console.warn("inner Component", props.data)
    return (
        <div>
             <h1>Memo Component</h1>
             
        </div>
    )
}


export default memo(Memo);