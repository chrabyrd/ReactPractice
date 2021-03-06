import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {}
    }

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();

    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => {
              return <Fish key={key} details={this.state.fishes[key]}/>
            })}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }
}
