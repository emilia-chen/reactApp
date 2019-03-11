import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Popconfirm, message } from 'antd';
function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}


class ReactPopconfirm extends Component {
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
    <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
      </div>
    );
  }
}

export default ReactPopconfirm;




