import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pagination } from 'antd';
import { Link } from "react-router-dom";

class ReactPagination extends Component {
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
  onChange = (e) => {
   console.log('onChange132', this.props.history)
   // this.context.router.push({ pathname : '/button', state : { msg : 'you do not login yet, please login' }});
 this.props.history.push('/button');
  
  }
  render() {
    let size=this.state.size
    return (
    <div>
     <Link to="/button">About</Link>
 <Pagination  onChange={this.onChange} defaultCurrent={1} total={50} />
  </div>
    );
  }
}

export default ReactPagination;




