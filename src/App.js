import React, { Component } from 'react';
import Gallery from './Gallery';
import Search from './Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textRecup:''
    }
  }

  toto = (textRecup) => {
    this.setState({ textRecup })
  }

  render() {
    return (
      <div className="App">
        <Search handleChange={this.toto} />
        <Gallery zozo={this.state.textRecup}/>

      </div>
    );
  }
}

export default App;
