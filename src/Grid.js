import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Radio, Icon ,Row, Col} from 'antd';

class ReactButton extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'large'};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  render() {
    let size=this.state.size
    return (
    <div>
     <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>    <Row gutter={30}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
    <br/><br/>
      <p>sub-element align left</p>
    <Row type="flex" justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element align center</p>
    <Row type="flex" justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element align right</p>
    <Row type="flex" justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element monospaced arrangement</p>
    <Row type="flex" justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>sub-element align full</p>
    <Row type="flex" justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>



   么么哒
      <Row>
    <Col style={{background :'red'}} xs={{ span: 5, offset: 1 }} sm={{ span: 6, offset: 2 }}>Col</Col>
    <Col style={{background :'red'}} xs={{ span: 11, offset: 1 }} sm={{ span: 6, offset: 2 }}>Col</Col>
    <Col style={{background :'red'}} xs={{ span: 5, offset: 1 }} sm={{ span: 6, offset: 2 }}>Col</Col>
  </Row>
  </div>
    );
  }
}

export default ReactButton;




