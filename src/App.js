import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {
 
  constructor(props) {
     super(props);
     this.state = {
      items: [{a:1},{a:2},{a:3}]
     }
    console.log('constructor1')
  }

handleClick = () => {
const { items } = this.state;
items.splice(items.length - 1, 1);
this.setState({ items: [].concat(items) });
}


  render() {
   
    console.log('reder')
     return (
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
         欢迎来到菜鸟教程

         <ul>
{this.state.items.map((i ,index)=> <li key={index}>{i.a}</li>)}
        </ul>
      <button onClick={this.handleClick}>delete</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;




