import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Popover, Button } from 'antd';


class ReactPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }

  render() {
    const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
    return (
      <div>
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
      </div>
    );
  }
}

export default ReactPopover;




