import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Spin } from 'antd';


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
 <Spin />
      </div>
    );
  }
}

export default About;




