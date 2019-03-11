import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TimePicker } from 'antd';
import moment from 'moment';

import {  Link } from "react-router-dom";
function onChange(time, timeString) {
  console.log(time, timeString);
}

class ReactTimePicker extends Component {
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

  render() {
    let size=this.state.size
    return (
    <div>
    <Link to="/button">About</Link>
    <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
  </div>
    );
  }
}

export default ReactTimePicker;




