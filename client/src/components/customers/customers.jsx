import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

  constructor(){
    
    super();

    this.state = {
      customers: []
    };
  }

  // This function runs automatically 
  // when the component mounts
  componentDidMount(){

    // Hit the api and get response
    // extract json from the response
    // set customer data
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => {
        console.log("customers", customers);
      }));
  }

  render() {
    return (
      <div>
        <h1>Customers</h1>
        <ul>
          {this.state.customers.map( customer => 
            <li key={customer.id}>{customer.nameFirst} {customer.nameLast}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;