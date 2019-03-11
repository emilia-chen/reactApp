import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Progress } from 'antd';


class ReactProgress extends Component {
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
   <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />

      </div>
    );
  }
}

export default ReactProgress;




