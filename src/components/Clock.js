import React, { Component } from 'react';
import '../App.css';

class Clock extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         time: new Date().toLocaleString(),
         message: "",
         name: ["Boss",
            "Chief",
            "Jefe",
            "Sir",
            "Cap'n",
            "Peter"],
         pickedName: ""
      };
   }
   componentDidMount() {
      this.intervalID = setInterval(
         () => this.tick(),
         1000
      );
      this.setState({ pickedName: this.state.name[Math.floor(Math.random() * 5)] })
   }
   componentWillUnmount() {
      clearInterval(this.intervalID);
   }
   tick() {
      this.setState({
         time: new Date()
      });
      this.setMessage()
   }
   setMessage() {
      if (this.state.time) {
         let hr = this.state.time.getHours()
         if (hr < 12) {
            this.setState({ message: "Good Morning, " + this.state.pickedName + "!" })
         }
         else if (hr < 17) {
            this.setState({ message: "Good Afternoon, " + this.state.pickedName + "!" })
         }
         else if (hr < 24) {
            this.setState({ message: "Good Evening, " + this.state.pickedName + "!" })
         }

      }

   }


   render() {
      return (
         <div>
            <span>
               {this.state.message}
            </span>
            <p className="App-clock">
               {this.state.time.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
         </div>
      );
   }
}

export default Clock;