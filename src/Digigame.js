import React, { Component } from 'react';
import Digidex from './Digidex';

class Digigame extends Component {
  static defaultProps = {
    digimon: [
      {
        name: "Imperialdramon",
        img: "https://digimon.shadowsmith.com/img/imperialdramon.jpg",
        level: "Mega",
        exp: 41
      },
      {
        name: "Leomon",
        img: "https://digimon.shadowsmith.com/img/leomon.jpg",
        level: "Champion",
        exp: 11
      },
      {
        name: "Zudomon",
        img: "https://digimon.shadowsmith.com/img/zudomon.jpg",
        level: "Ultimate",
        exp: 25
      },
      {
        name: "Flamedramon",
        img: "https://digimon.shadowsmith.com/img/flamedramon.jpg",
        level: "Armor",
        exp: 13
      },
      {
        name: "War Greymon",
        img: "https://digimon.shadowsmith.com/img/wargreymon.jpg",
        level: "Mega",
        exp: 41
      },
      {
        name: "Devimon",
        img: "https://digimon.shadowsmith.com/img/devimon.jpg",
        level: "Champion",
        exp: 11
      },
      {
        name: "Magna Angemon",
        img: "https://digimon.shadowsmith.com/img/magnaangemon.jpg",
        level: "Ultimate",
        exp: 25
      },
      {
        name: "Omnimon",
        img: "https://digimon.shadowsmith.com/img/omnimon.jpg",
        level: "Mega (Legendary Warrior)",
        exp: 47
      }
    ]
  };
  render() {
    let player1 = [];
    let player2 = [...this.props.digimon];
    while (player1.length < player2.length) {
      let randIdx = Math.floor(Math.random() * player2.length);
      let randDigimon = player2.splice(randIdx, 1)[0];
      player1.push(randDigimon);
    }

    let exp1 = player1.reduce((exp, digimon) => exp + digimon.exp, 0);
    let exp2 = player2.reduce((exp, digimon) => exp + digimon.exp, 0);

    return (
      <div>
        <Digidex digimon={player1} exp={exp1} isWinner={exp1 > exp2} />
        <Digidex digimon={player2} exp={exp2} isWinner={exp1 < exp2} />
      </div>
    );
  }
}

export default Digigame;