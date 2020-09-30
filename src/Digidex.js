import React, { Component } from 'react';
import Digicard from './Digicard';
import './Digidex.css'

class Digidex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Digidex-winner">Winning Player</h1>;
    } else {
      title = <h1 className="Digidex-loser">Losing Player</h1>;
    }
    return (
      <div className="Digidex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Digidex-cards">
          {this.props.digimon.map((digi) => (
            <Digicard name={digi.name} img={digi.img} level={digi.level} exp={digi.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Digidex;