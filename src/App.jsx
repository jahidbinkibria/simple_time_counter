import React, { Component } from "react";
import Clock from "./Clock";
import "./App.css"

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            deadLine: "December 25,2017",
            newDeadLine: "",
        }
    }

    getDate(){
        if(this.state.newDeadLine !== ''){
            this.setState({
                deadLine: this.state.newDeadLine
             })
        }
    }

    render(){
        return(
            <div className="main">
               <div className="containt">
                   <div className="title">Set You'r Bloody Count</div>
                    <div className="time">Counting To <span>{this.state.deadLine}</span></div>
                    <Clock deadLine={this.state.deadLine}/>
                    <div className="time-c">
                        <input type="text" placeholder="Month Date, Year" onChange={(evt) => this.setState({newDeadLine: evt.target.value})}/>
                        <button onClick={()=> this.getDate()}>Submit</button>
                    </div>
               </div>
            </div>
        )
    }
}

export default App;