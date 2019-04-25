import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import produce from "immer"
class App extends Component {
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: '',
  };
 
 componentDidMount() {
  console.log('componentDidMount')
 
 const obj1 = {
       todo: "Learn typescript1",
       done: true,
       id: '1',
       list: {
         todo: "Try immer1",
         done: false
       },
       list1: {
         todo: "Try immer1",
         done: false
      }
}

const obj2 = produce(obj1, nextData => {
    nextData.list.todo = '我改变了了数据';
});
const obj3 = Object.assign({}, obj1) // {... obj1}

console.log(obj1);
console.log(obj3);


if(obj1.list1 === obj3.list1) {                                                                                                                      
  console.log('obj1.list1等于obj2.list1'); //相等                                                                                                                     
}  
if(obj1 === obj3) {                                                                                                                      
  console.log('obj1等于obj3'); //相等                                                                                                                     
} 

 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
         欢迎来到菜鸟教程
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   console.log('state',state)
 return { counter: state.counter }
};

export default App;




