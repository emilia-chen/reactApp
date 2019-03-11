import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Radio } from 'antd';

import {  Link } from "react-router-dom";


class ReactRadio extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'large',collapsed: false};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }
  componentWillUnmount(){
     console.log('componentWillUnmount1' )
  }
   toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  render() {
    let size=this.state.size
    return (
    <div>
    <Link to="/button">About</Link>
<Radio>Radio</Radio>
  </div>
    );
  }
}

export default ReactRadio;




