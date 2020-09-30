import React, { Component } from 'react';
import './Digicard.css';

class Digicard extends Component {
  render() {
    return (
      <div className="Digicard">
        <h1 className="Digicard-title">{this.props.name}</h1>
        <div className="Digicard-image">
          <img className="char-img" src={this.props.img} alt={this.props.name} />
        </div>
        <div className="Digicard-data">Level: {this.props.level}</div>
        <div className="Digicard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Digicard;