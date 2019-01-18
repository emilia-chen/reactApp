import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {route: window.location.hash.substr(1)};
  }
  componentDidMount() {


    console.log("props",this.props)
/*    window.addEventListener('hashchange', () => {
   
console.log(' window.location.hash.substr(1)',
   window.location.hash)
      this.setState({
        route: window.location.hash.substr(1)
      })
    })*/
  }

  render() {
    return (
      <div className="App">
      <Button type="primary">Button</Button>
        <ul>
          <li><Link to="/about/:id" params={ {id: 'Jkei3c32'}}  >About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
       {this.props.children}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
         欢迎来到菜鸟教程   
          </p>
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



