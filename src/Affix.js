import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Affix, Button } from 'antd';


class ReactAffix extends Component {
  constructor(props) {
    super(props);
    this.state = {   top: 10,
    bottom: 10};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }
   toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  render() {
    let size=this.state.size
    return (
    <div>
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>to affix top</Button>
    </Affix>
          <div style={{height:100}} />
     <div style={{height:100}} />
      <div style={{height:100}} />
       <div style={{height:100}} />    <div style={{height:100}} />
     <div style={{height:100}} />
      <div style={{height:100}} />
       <div style={{height:100}} />
      </div>
    );
  }
}

export default ReactAffix;




