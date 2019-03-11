import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RadioOption from './RadioOption';

class RadioGroup extends React.Component{
//父组件方法
  showValue(val){
    console.log(val)
  }
  renderChildren(props) {
    //遍历所有子组件
    return React.Children.map(this.props.children, child => {
      console.log('child',this.props.children)
      if (child.type === RadioOption){
        
        return React.cloneElement(child, {

          //把父组件的props.name赋值给每个子组件（父组件传值给子组件）
          name: props.name,
          //父组件的方法挂载到props.showValue上，以便子组件内部通过props调用
          showValue:this.showValue
        })
      }
      else{
        console.log('这款')
     return <div>123</div>
      }
    })
  }
  render() {
    return(
        <div>
          {this.renderChildren(this.props)}
        </div>
    )
  }
};

export default RadioGroup;




