import React from 'react'
import Style from  './includes/Style'
import List from  './includes/List'
import Forms from  './includes/Forms'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Routing extends React.Component {
    constructor () {
        super();
    }
    render () {
        
        return (
            <div>
                <Router>
                    <Link to="">Home </Link>
                    <Link to="/Style"> Style</Link>
                    <Link to="/Forms"> Forms</Link>
                    <Link to="/List"> List</Link>

                    {/* <Route path="" component={}/> */}
                    <Route path="/Style" component={Style}/>
                    <Route path="/Forms" component={Forms}/>
                    <Route path="/List" component={List}/>
                </Router>

            </div>
        )
    }
}