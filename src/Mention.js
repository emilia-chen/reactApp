import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Mention } from 'antd';

import {  Link } from "react-router-dom";

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}
const { toString, toContentState } = Mention;

class ReactMention extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'large',collapsed: false};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }
  componentWillUnmount(){
     console.log('componentWillUnmount1' )
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
<Mention
    style={{ width: '100%' }}
    onChange={onChange}
    defaultValue={toContentState('@afc163')}
    defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
  />
  </div>
    );
  }
}

export default ReactMention;




