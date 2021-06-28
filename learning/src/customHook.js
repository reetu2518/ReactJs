import {useEffect} from "react";

const customHook = ()=> {
    useEffect((props)=>{
        document.title = props+" title hits";
    })
};

export default customHook;