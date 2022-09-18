import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';

class DisplayDate extends Component{
    constructor(){
        super()
        this.state = {
            currentTime: 'day, ##/##/#### ##:##:##'
        }
    }
    componentDidMount(){
        const updateTime = () => {
            let dateObj = new Date();
            let options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let time = dateObj.toLocaleString("id-ID", options);
            let hour = dateObj.toLocaleString("id-ID", {hour: '2-digit', hour12: false})
            let minute = dateObj.toLocaleString("id-ID", {minute: '2-digit'})
            let second = dateObj.toLocaleString("id-ID", {second: "2-digit"})
            this.setState({
                currentTime: time+" "+hour+":"+minute+":"+second
            })
            setInterval(updateTime, 1000);
        }
        updateTime()
    }
    render(){
        return(
            <p className="text-light ms-3">{this.state.currentTime}</p>
        )
    }
  }

class BootstrapReact2HeaderDate extends Component{
    render(){
        return(
            <div className="date">
                <DisplayDate />
            </div>
        )
    }
}

export default BootstrapReact2HeaderDate;