import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
  }
  componentWillMount = () => {
    axios.get('https://api.pokemontcg.io/v1/cards')
      .then((result) => {
        this.setState({ cards: result.data.cards })
      })
  }

  render() {
    return (<div>
      {
        this.state.cards
        .filter(card => card.name.includes(this.props.zozo))
        .map(card => <img src={card.imageUrl} alt='card' />)
      }
    </div>);
  }
}

export default Gallery;