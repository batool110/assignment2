import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      name: 'Hello World'
    })
  }

  changePak = () => {
    this.setState({
      name: 'Hello Pakistan',
    })
  }

  changeWorld = () => {
    this.setState({
      name: 'Hello World',
    })
  }

  render() {
    return (
      <div className="App">

      {this.state.name}
      <br></br>
      <button onClick=
      {
        (this.state.name == 'Hello World') ? this.changePak : this.changeWorld
      }>Change Text</button>

      </div>
    )

  }
}

export default App;
