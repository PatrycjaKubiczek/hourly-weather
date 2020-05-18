import React, { Component } from "react";
import './Weekday.scss'

class Weekday extends Component {
  getNameDay = (time) => {
    // const days = [
    //   "niedziela",
    //   "poniedziałek",
    //   "wtorek",
    //   "środa",
    //   "czwartek",
    //   "piątek",
    //   "sobota",
    // ];
    // return days[new Date(time * 1000).getDay()];

    let timeValue = new Date(time * 1000).getDate();
    let today = new Date().getDate();
    let tommorow = today + 1;
    let dayAfterTommorow = today + 2;
    let dayAfterTommorow2 = today + 3;

    if (timeValue === today) {
      return "";
    } else if (timeValue === tommorow) {
      if (new Date(time * 1000).getHours() === 0)
        return <p className="weekday">JUTRO</p>;
    } else if (timeValue === dayAfterTommorow) {
      if (new Date(time * 1000).getHours() === 0)
        return <p className="weekday">POJUTRZE</p>;
    } else if (timeValue === dayAfterTommorow2) {
        return <p className="weekday">POPOJUTRZE</p>;
    }

  };
  render() {
    return (
      <>
       {this.getNameDay(this.props.day)}
      </>
    );
  }
}

export default Weekday;
