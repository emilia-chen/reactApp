import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {  Link } from "react-router-dom";

import { Rate } from 'antd';

class ReactRate extends Component {
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
   <Rate />
  </div>
    );
  }
}

export default ReactRate;




