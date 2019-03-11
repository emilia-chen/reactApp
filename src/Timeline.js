import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Timeline } from 'antd';


class ReactTimeline extends Component {
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
     <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
      </div>
    );
  }
}

export default ReactTimeline;




