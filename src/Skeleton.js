import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Skeleton } from 'antd';


class ReactSkeleton extends Component {
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
 <Skeleton />
      </div>
    );
  }
}

export default ReactSkeleton;




