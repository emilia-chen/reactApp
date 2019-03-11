import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Badge, Icon } from 'antd';


class ReactBadge extends Component {
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
  <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
      <a href="#" className="head-example" />
    </Badge>
      </div>
    );
  }
}

export default ReactBadge;




