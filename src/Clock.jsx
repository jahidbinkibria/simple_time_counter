import React , {Component} from "react";
import "./App.css"

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            days: 0,
            hour: 0,
            minute: 0,
            sec: 0
        }
       
    }

    componentWillMount(){
        this.getTime(this.props.deadLine)
    }
    
    componentDidMount(){
        setInterval(() => this.getTime(this.props.deadLine),1000);
        console.log()
    }

    for0(num){
       return num <10 ? "0" + num : num;
    }

    getTime(deadLine){
        const time = Date.parse(deadLine) - Date.parse(new Date());
        const sec = Math.floor((time/1000)%60);
        const minute = Math.floor((time/1000/60)%60);
        const hour = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({
            days,sec,minute,hour
        })
    }
   
    render(){
        return(
            <div>
                <div>
                    <div className="days">{ this.for0(this.state.days)} Days</div>
                    <div className="hours">{ this.for0(this.state.hour)} Hours</div>
                    <div className="minutes">{ this.for0(this.state.minute)} Minutes</div>
                    <div className="sec"><span>{ this.for0(this.state.sec)}</span> Sec</div>
                </div>
            </div>
        )
    }
}

export default Clock;