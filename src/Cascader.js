import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cascader } from 'antd';

import {  Link } from "react-router-dom";

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }, {
      value: 'xiasha',
      label: 'Xia Sha',
      disabled: true,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua men',
    }],
  }],
}];


function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
 console.log('inputValue',inputValue)
 console.log('path',path)
 return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}
class ReactCascader extends Component {
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
 <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{ filter }}
  />
  </div>
    );
  }
}

export default ReactCascader;




