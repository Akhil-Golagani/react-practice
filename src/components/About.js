import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React</h2>
                <UserClass name={"Akhil (class)"} location={"Vizag (class)"}/>
            </div>
        );
        
    }

}

export default About;