import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker,LocaleProvider} from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import {  Link } from "react-router-dom";
moment.locale('en');
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}

class ReactButton extends Component {
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
    <LocaleProvider locale={zhCN}>
    <DatePicker  onChange={onChange} />
     </LocaleProvider>
    <br />
    <MonthPicker  onChange={onChange}  />
    <br />
    <RangePicker   onChange={onChange} />
    <br />
    <WeekPicker   onChange={onChange}  />
      
  </div>
    );
  }
}

export default ReactButton;




