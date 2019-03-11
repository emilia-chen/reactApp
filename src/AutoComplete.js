import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Icon, Input, AutoComplete } from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const dataSource = [{
  title: '话题',
  children: [{
    title: 'AntDesign',
    count: 10000,
  }, {
    title: 'AntDesign UI',
    count: 10600,
  }],
}, {
  title: '问题',
  children: [{
    title: 'AntDesign UI 有多好',
    count: 60100,
  }, {
    title: 'AntDesign 是啥',
    count: 30010,
  }],
}, {
  title: '文章',
  children: [{
    title: 'AntDesign 是一个设计语言',
    count: 100000,
  }],
}];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  );
}
const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count} 人 关注</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
    </a>
  </Option>,
]);

class ReactAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: []};
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
handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }
  render() {
     const { dataSource } = this.state;
    return (
    <div>
 <div className="certain-category-search-wrapper" style={{ width: 250 }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
  </div>
    );
  }
}

export default ReactAutoComplete;




