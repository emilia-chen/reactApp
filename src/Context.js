import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
});

class App extends React.Component {
  render () {
    console.log('props',this.props)
    return (
      <ThemeContext.Provider value={{background: 'green', color: 'white'}}>
        <Header />
      </ThemeContext.Provider>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <Title>Hello React Context API</Title>
    );
  }
}
 
class Title extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {context => (
          <h1 style={{background: context.background, color: context.color}}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default App;




