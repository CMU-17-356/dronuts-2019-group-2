import React from 'react';

import {Jumbotron, Button} from 'react-bootstrap';
import "./Shop/scss/style.scss";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";
import Cookies from 'universal-cookie';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.props.onClose.bind(this);
   
      // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get('username') == 'admin' && data.get('password') == 'password'){
      //set cookie
      const cookies = new Cookies();
      let d = new Date();
      d.setTime(d.getTime() + (60*60*1000));
      cookies.set("admin", true, {path: "/", expires: d});
      console.log("Admin cookie set");
      this.onClose();
      window.alert("Success! Logged in as admin.")
    }
    else{
      window.alert("Incorrect username/password. ")
    }
    return false;
  }
  
  render() {

    // const for React CSS transition declaration
    if(!this.props.show) {
      return null;
    }
    let component =  <Modal onSubmit={ this.handleSubmit } key='modal' onClose={this.onClose}/> ;
    {console.log("In login: "+this.props.show)};

    return <CSSTransitionGroup transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
             { component }
           </CSSTransitionGroup>
  }
}

// Modal
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.props.onClose.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this); //bind function once

  }
  handleClickOutside(event) {
    if (!this.modalNode.contains(event.target)) {
      this.onClose();
    }
    // var modalNode = findDOMNode(this.refs.modalPreview);
    //   if ( !modalNode.contains(event.target)) {
    //     this.onClose();
    //     event.stopPropagation();
    //   }
    }
  
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside,
      true
    );
    console.log("mounting");
  }
  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside,
      true
    );
        console.log("UNmounting");

  }
  render() {
    return (
    <div className ='backDrop'  >
    <div className='Modal' ref={modalNode => this.modalNode = modalNode} >
              <Logo />
              <form onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
              </form>
              {/*
              <div className='social-signin'>
                <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                <button className="tw" onClick={ this.props.onClick }><i className="fa fa-twitter" aria-hidden="true"></i></button>
              </div>
            */}
                <a href='#'>Lost your password ?</a>
   </div>
   </div>
  );}
}

// Generic input field
class Input extends React.Component {
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autoComplete='false'/>
              <label htmlFor={ this.props.name } ></label>
           </div>
  }

}

class Logo extends React.Component {
  render() {
    return <div className="logo">
                <img src="img/dronut.png" width="100px"/>
              </div>
  }
}

// Button to brind the modal back
class ModalBack extends React.Component {
  render() {
    return <button className="bringitback" onClick={ this.props.onClick } key={ this.props.className }>Brind the modal back !</button>
  }
}


export default Login;

