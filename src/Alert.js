import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'antd';


class ReactAlert extends Component {
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
  <Alert message="Success Text" type="success" />,
 
      </div>
    );
  }
}

export default ReactAlert;




