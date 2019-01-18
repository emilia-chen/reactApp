import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }

  render() {
    return (
      <div>
   About1
      </div>
    );
  }
}

export default About;




