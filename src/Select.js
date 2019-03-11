import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Select } from 'antd';

import {  Link } from "react-router-dom";

const Option = Select.Option;
function handleChange(value) {
  console.log(`selected ${value}`);
}
class ReactSelect extends Component {
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
 <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
  </div>
    );
  }
}

export default ReactSelect;




