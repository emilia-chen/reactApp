import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Slider, Switch } from 'antd';

import {  Link } from "react-router-dom";

  function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}
class ReactSlider extends Component {
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
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }

  render() {
   const { disabled } = this.state;
    return (
      <div>
        <Slider  onChange={onChange} onAfterChange={onAfterChange} defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    );
  }
}

export default ReactSlider;




