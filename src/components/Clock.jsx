import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);

    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      date: new Date().toLocaleTimeString(),
      day: this.days[new Date().getDay()],
      month: this.months[new Date().getMonth()]
    }
    this.interval = setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateDate() {
    this.setState({
      date: new Date().toLocaleTimeString(),
      day: this.days[new Date().getDay()],
      month: this.months[new Date().getMonth()]
    });
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-center font-black text-off-white1">{this.state.date}</div>
        <div className="text-center font-black text-off-white1">{this.state.day}</div>
      </div>
    );
  }
}

export default Clock