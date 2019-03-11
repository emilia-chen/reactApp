import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Empty } from 'antd';


class ReactEmpty extends Component {
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
     <Empty />,
      </div>
    );
  }
}

export default ReactEmpty;




