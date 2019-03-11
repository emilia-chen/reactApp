import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Anchor } from 'antd';

const { Link } = Anchor;


class ReactAnchor extends Component {
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
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>



<div id="API">
你好你<br/>你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>你好你<br/>你好你<br/>你好你<br/>
</div>
<div id="Link-Props">
你好你<br/>你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>
你好你<br/>你好你<br/>你好你<br/>你好你<br/>
</div>







      </div>
    );
  }
}

export default ReactAnchor;




