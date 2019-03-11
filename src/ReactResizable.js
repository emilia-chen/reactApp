import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Resizable, ResizableBox } from 'react-resizable';
 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 200,
      height: 200
    }
  }
  onResize = (event, { element, size }) => {
    this.setState({ width: size.width, height: size.height });
  };
 render() {
  return (
    <ResizableBox width={200} height={200}
        minConstraints={[100, 100]} maxConstraints={[300, 300]}>
      <span>Contents</span>
    </ResizableBox>
  );
}
}
 
 
export default App;

