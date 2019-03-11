import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

class ReactCarousel extends Component {
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
 <Carousel afterChange={onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
      </div>
    );
  }
}

export default ReactCarousel;




