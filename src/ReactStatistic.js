import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Row, Col, Button } from 'antd';


class ReactStatistic extends Component {
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
 <Row gutter={16}>
    <Col span={12}>
    </Col>
    <Col span={12}>
      <Button style={{ marginTop: 16 }} type="primary">Recharge</Button>
    </Col>
  </Row>
      </div>
    );
  }
}

export default ReactStatistic;




