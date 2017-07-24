import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  constructor() {
    super();

    this.state = {
      storeName: getFunName()
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('hi');
  }

  render(){
    return(
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" placeholder="Store Name" defaultValue={this.state.storeName}/>
        <button type="submit" onSubmit={this.handleSubmit}>Visit Store</button>
      </form>
    );
  }
}
