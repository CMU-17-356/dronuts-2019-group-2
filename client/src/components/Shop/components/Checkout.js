import React, { Component } from "react";
import EmptyCart from "../empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "../scss/style.scss";
import { Link } from 'react-router-dom';
import MapContainer from "./Map";


class Map extends React.Component {
  
  render() {
    return(
      <div>
        <h1>Your Location:</h1>
        <div id="map" style={{width: 500, height: 300}}></div>
      </div>

    );
  }
};

class Hooray extends React.Component {
  render() {
    return (
      <div className="order-message">
        <img src="https://media.giphy.com/media/3ohzdTZr8QKcgHuj3W/giphy.gif" height="300px" width="300px"></img>
        <h1>Congatulations!</h1>
        <br />
        <h3>Your donuts are on the way</h3>
      </div>
    );
  }
};

class Boohoo extends React.Component {
  render() {
    return (
      <div className="order-message">
        <img src="/img/sad-donut.png" height="300px" ></img>
        <h1>Uh Oh!</h1>
        <br />
        <h3>Your transaction was declined, please refresh the page and try again.</h3>
      </div>
    );
  }
};

class Button extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

// Create component for datalist input
class Datalist extends React.Component {
  render() {
    // Get all options from option prop
    const dataOptions = this.props.options.split(', ');

    // Generate list of options
    const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption} />
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input list={this.props.htmlFor} />

        <datalist
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {dataOptionsList}
        </datalist>
      </fieldset>
    );
  }
};

// Create component for checkbox input
class Checkbox extends React.Component {
  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='checkbox'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
};

// Create component for label
class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
};

// Create component for input
class Input extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
        />
      </fieldset>
    );
  }
};

// Create component for radio input
class Radio extends React.Component {
  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='radio'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
};

// Create component for select input
class Select extends React.Component {
  render() {
    // Get all options from option prop
    const selectOptions = this.props.options.split(', ');

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <select
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {selectOptionsList}
        </select>
      </fieldset>
    );
  }
};

// Create component for textarea
class Textarea extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
      </fieldset>
    );
  }
};


// Create component for form
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form method='' action='' onSubmit= { this.props.onSubmit }>
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Name'
          required={true}
          type='text'
        />
        
        <Input
          hasLabel='true'
          htmlFor='emailInput'
          label='Email'
          required={true}
          type='email'
        />
        
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Phone Number'
          required={true}
          type="text"
          
        />
        
        
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Delivery Time'
          options='ASAP, 30 min, 1 hour, 2 hours, 3 hours, 4 hours'
          required={true}
        />
        
        
        <Button
          type='submit'
          value='submit'
          text='Go to payment page >>'
        />
      </form>
    );
  }
};


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [],
      totalAmount: 0,

      currentLocation: {
        lat: 0,
        lng: 0
      },
      orderStatus: "pending"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createTransaction = this.createTransaction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  financial = (x) => Number.parseFloat(x).toFixed(2);

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  updateLocation(curLoc){
    this.setState({currentLocation:curLoc});
    console.log(curLoc);
  }

  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
    console.log("summmed");
  }

  handleFormPostData() {
    console.log("In handle form post data");
    console.log(this.state.currentLocation);
    var itemsString = "";
    const items = this.state.cart;
    for (var i = 0; i < items.length; i++) { 
                itemsString += items[i].name;
                itemsString += ": ";
                itemsString += items[i].quantity;
                if (i != items.length-1){
                  itemsString += ", ";
                }
                
            }
    const data = {
      items: itemsString,
      paid: true,
      status: 'packing',
      lat: this.state.currentLocation.lat,
      long: this.state.currentLocation.lng
    };

    fetch('http://localhost:3000/api/orders/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "items": data.items,
        "paid": data.paid,
        "status": data.status,
        "lat": data.lat,
        "long": data.long
      })
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    //alert("Order added!");
  }

  async createTransaction() {
    const createTransactionUrl = 'http://credit.17-356.isri.cmu.edu/api/transactions'
    let promise = fetch(createTransactionUrl, {
      method: 'POST',
      body: `companyId=2&amount=${this.state.totalAmount}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    let response = await promise;
    let result = await response.json();
    console.log(result.id);
    return await result.id;
  }

  componentWillMount(){
      this.sumTotalAmount();
  }

  G

  async handleSubmit(e){
    e.preventDefault();
    const createTransactionUrl = 'http://credit.17-356.isri.cmu.edu/api/transactions'
    let promise = fetch(createTransactionUrl, {
      method: 'POST',
      body: `companyId=2&amount=${this.state.totalAmount}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    let response = await promise;
    let result = await response.json();
    const transID = result.id;
    window.open(`http://credit.17-356.isri.cmu.edu/?transaction_id=${transID}`);

    var refreshIntervalId = setInterval(async () => {
              const createTransactionUrl = `http://credit.17-356.isri.cmu.edu/api/transactions/${transID}`
      let promise = fetch(createTransactionUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    let response = await promise;
    let result = await response.json();
    console.log(result.status);
    if (result.status != "pending"){
      console.log("Order Status updated! "+result.status)
      this.setState({orderStatus:result.status})
      clearInterval(refreshIntervalId);
    }
            }, 1000);


  }

  

  render() {
    if(this.state.orderStatus == "approved"){
      this.handleFormPostData();
      return(<Hooray />)
    }
    else if(this.state.orderStatus == "denied"){
      return(<Boohoo />)
    }
    let cartItems;
    cartItems = this.state.cart.map(product => {
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{this.financial(product.price)}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {"Qty: "}{product.quantity} {" "}
            </p>
            <p className="amount">{this.financial(product.quantity * product.price)}</p>
          </div>

        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="ul"
          className="cart-checkout"
        >
          {cartItems}
          <div className="cart-total">
          <h5>Total: ${this.financial(this.state.totalAmount)}</h5>
          </div>
        </CSSTransitionGroup>
      );
    }
    return (
        <div className="checkout">

        <div className="form-container">
          <div className="location-container">
          <h3>Where should we send your donuts?</h3>
          <MapContainer updateLocation={this.updateLocation} centerAroundCurrentLocation={true}/>
          </div>
          <div className="checkout-form">

            <h3>Just a few more things...</h3>
            <Form onSubmit={this.handleSubmit}/>
          </div>
        </div>

          <div className="checkout-cart">
            {view}
          </div>



        </div>


    );
  }
}

export default Checkout;
