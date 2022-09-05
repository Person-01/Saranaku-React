import React, { useState } from 'react';
import './css/style.css';
import Cart from "./cart"


function App() {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
}

function Header(){
  return(
    <div>
      <div className="header-1">
          <h1 className="title">Saranaku Cashier</h1>
      </div>
      <div className="header-2">
          {DisplayDates()}
      </div>
    </div>
  ) 
}
function DisplayDates(){
  //create date object
  var dateObj = new Date();
  //date object options
  var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let time = dateObj.toLocaleString("id-ID", options);
  let hour = dateObj.toLocaleString("id-ID", {hour: '2-digit', hour12: false})
  let minute = dateObj.toLocaleString("id-ID", {minute: '2-digit'})
  let second = dateObj.toLocaleString("id-ID", {second: "2-digit"})
  //hook to store date object
  const [currentTime, setCurrentTime] = useState(time+" "+hour+":"+minute+":"+second);

  function updateTime(){
    //create new date object every 1000ms passed
    dateObj = new Date();
    time = dateObj.toLocaleString("id-ID", options);
    hour = dateObj.toLocaleString("id-ID", {hour: '2-digit', hour12: false})
    minute = dateObj.toLocaleString("id-ID", {minute: '2-digit'})
    second = dateObj.toLocaleString("id-ID", {second: "2-digit"})
    setCurrentTime(time+" "+hour+":"+minute+":"+second);
  }
  
  setInterval(updateTime, 1000);
  return(
    <div>
      {currentTime}
    </div>
  )
}

export default App;
