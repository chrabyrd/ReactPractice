import React from 'react';

export default class AddFishForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      price: null,
      status: "available",
      desc: null,
      image: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const fish = {...this.state};
    this.props.addFish(fish)
  }

  render() {
    return(
      <form className="fish-edit" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Fish Name" name="name" onChange={ (e) => {this.handleFieldChange(e)} }/>
        <input type="text" placeholder="Fish Price" name="price" onChange={ (e) => {this.handleFieldChange(e)} }/>
        <select name="status" onChange={ (e) => {this.handleFieldChange(e)} }>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
         <textarea placeholder="Fish Desc" name="desc" onChange={ (e) => {this.handleFieldChange(e)} }></textarea>
        <input type="text" placeholder="Fish Image" name="image" onChange={ (e) => {this.handleFieldChange(e)} }/>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}
