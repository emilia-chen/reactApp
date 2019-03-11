import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class ReactCollapse extends Component {
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
 <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>
      </div>
    );
  }
}

export default ReactCollapse;




