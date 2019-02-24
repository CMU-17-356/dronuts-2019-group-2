import React, { Component } from "react";
import {
  HashRouter
} from "react-router-dom";
import Navigation from './components/Navigation';



class Main extends Component {
  state = {customers: []}

  componentDidMount() {
    fetch('/api/customers')
      // .then(res => res.json()) // comment this out for now
      .then(res => res.text())          // convert to plain text
      .then(customers => this.setState({ customers }));
   


  }



  render() {
    return (
      <HashRouter>
        <div>
        
        <Navigation />
        <div class = "content"> </div>
            <div class="footer"> <br />
              <p> &copy; Dronut Team 2</p>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;