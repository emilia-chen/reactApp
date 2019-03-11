import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tooltip } from 'antd';


class ReactTooltip extends Component {
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
 <Tooltip title="prompt text">
 {(title)=>{
  console.log(title)
 }}
    <span>Tooltip will show when mouse enter.</span>
 
  </Tooltip>
      </div>
    );
  }
}

export default ReactTooltip;




