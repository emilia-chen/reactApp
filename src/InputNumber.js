import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputNumber } from 'antd';

import {  Link } from "react-router-dom";
function onChange(value) {
  console.log('changed', value);
}
class ReactInputNumber extends Component {
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
 <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
  </div>
    );
  }
}

export default ReactInputNumber;




