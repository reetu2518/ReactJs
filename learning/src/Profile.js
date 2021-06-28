import React from 'react'

// class Profile extends React.Component {
//     constructor (){
//         super()
//         return (
//             <h1>constructor</h1>
//         )
//     }
//     componentDidMount (){
//         console.warn("called lfe cycle of ")
//     }
//     render () {
//         return(
//             <div>Profile</div>
//         )
//     }
// }

// export default Profile;

// function component
export default function Profile(arg){
    const red=()=>{
        alert("called function component")
    }

    return <div>
            <p onClick={red}>{arg.text}</p>
            <p>{arg.name.fname} {arg.name.lname}</p>
        {/* without JSX */}
        {/* {
            React.createElement(
                'h2',
                {className:'clss'},
                'Without JSX'
            )
        } */}
        </div>
}