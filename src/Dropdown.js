import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu, Dropdown, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class ReactDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'large',collapsed: false};
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
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);
    return (
    <div>
<Dropdown overlay={menu} trigger={['click']}>
    <span style={{ userSelect: 'none' }}>Right Click on Me</span>
  </Dropdown>,
    </div>
    );
  }
}

export default ReactDropdown;




