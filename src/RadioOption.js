import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class RadioOption extends React.Component{
  render() {
        return (
        <label>
        <input type="radio" value={this.props.value} name={this.props.name}  onClick={()=>{this.props.showValue(this.props.value)}}/>
        {this.props.label}
      </label>
    );
  }
};

export default RadioOption;




