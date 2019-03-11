import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

class ReactMessage extends Component {
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
 <Button type="primary" onClick={info}>Display normal message</Button>,
      </div>
    );
  }
}

export default ReactMessage;




