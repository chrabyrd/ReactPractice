import React from 'react';
import { getFunName } from '../helpers';
import { Redirect } from 'react-router';

export default class StorePicker extends React.Component {
  constructor() {
    super();

    this.state = {
      storeName: `store/${getFunName()}`,
      redirect: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render(){
    return(
      <div>
        { this.state.redirect ? <Redirect to={this.state.storeName} /> : null }
        <form className="store-selector" onSubmit={this.handleSubmit}>
          <h2>Please Enter a Store</h2>
          <input type="text" placeholder="Store Name" defaultValue={this.state.storeName}/>
          <button type="submit">Visit Store</button>
        </form>
      </div>
    );
  }
}
