import React, { Component } from "react";
import {
  HashRouter
} from "react-router-dom";
import Navigation from './components/Navigation';



class Main extends Component {
  state = {users: []}

  render() {
    return (
      <HashRouter>
        <div className="router-container">


        <Navigation />
            <div className="footer"> <br />
              <p> &copy; Dronut Team 2</p>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
