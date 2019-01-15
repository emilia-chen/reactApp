import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Immutable from 'immutable';

const items=[{a: 1}, {a: 2}, {a: 3}]
class App extends Component  {
   constructor(props) {
      super(props);
      
      this.state = {opacity: 1.0,color:'red',detail:items};
   

  }
shouldComponentUpdate (nextProps, nextState) {
    // return !_.isEqual(nextState, this.state) 删除这一行
    // 拿到新老状态， 在后边进行比对
    let oldState = this.state || {}
    let newState = nextState ? nextState : {}
    // 如果属性键不同，直接更新页面
    let keys = Object.keys(newState)
    if (Object.keys(oldState).length !== keys.length) return true;
    for (var i = 0, len = keys.length; i < len; i++) {
      let key = keys[i]
      // 如果说属性值不一样，说明需要更新状态
      if(!Immutable.is(newState[key], oldState[key])) return true
    }
    return false
  }

  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log(this.props)
    console.log('componentDidMount')

 // 使用 immutable.js 后
// let arr1 = Immutable.List([1, 2, 3])
// let arr2 = arr1.push(4)
// let arr3 = arr2.pop()
// let arr4 = arr3.map(item => item * 2)
// let arr5 = arr4.filter(item => item < 5)

// console.log(arr5) // List [ 2, 4 ]

// let arr6 = arr5.update(1, val => val * 100)
// console.log(arr6)  // List [ 2, 400 ]

// let arr7 = arr6.delete(0)
// console.log(arr7) // List [ 400 ]


// let obj1 = Immutable.fromJS({ name: 'leo', age: 12, home: { name: 'shenzhen' } })
// let obj2 = obj1.set('name', 'hello')
// let obj3 = obj1.setIn(['home', 'name'], 'new Name')
// let obj4 = obj3.update('age', val => val + 1)
// let obj5 = obj4.delete('age')
// let obj6 = obj4.clear()
// console.log('obj6',new Map())
// console.log('obj6',obj6)
// let obj7 = obj6.merge({name: 'world', gender: 'man'})
// console.log('obj7',obj7)

 /*let foo = Immutable.fromJS({a: {b: 1}});

let bar = foo.setIn(['a', 'b'], 2);   // 使用 setIn 赋值
console.log(foo.getIn(['a', 'b']));  // 使用 getIn 取值，打印 1

let yoo = foo.setIn(['a', 'b'], 1);

console.log(foo === bar);  //  打印 false
   console.log(yoo === foo); 

  const obj1={a:1}

 const obj2=JSON.parse(JSON.stringify(obj1));
   console.log("aaa"+(obj1 === obj2)); */

items.pop()
this.setState(prevState => (
    {items: items}
));
 /*  let a1=[{b:1,c:"hello"},{b:2,c:"hello1"}]
   let a2=[{d:5,c:"hello1"},{b:4,f:"hello1",d:6}]
     
   let a3= Object.assign(a1,a2)

 console.log('a3',a3)
const obj1 = {a: 1};
const obj2 = Object.assign({}, obj1);
 
obj1.a = 2;

 console.log('obj2.a.b',obj2.a )*/
items.splice(items.length - 1, 1);
 console.log('items',items )

     this.setState({
       detail:items
      });
     //this.state.color='red'
     setTimeout(()=>{
    console.log(this.state)
     }, 1000)
    /*  setTimeout(()=>{
   console.log('this.props',this.props)
     }, 5000)*/
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  // shouldComponentUpdate(){

  //   console.log('shouldComponentUpdate')
  // return true
  // }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
   componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color: this.state.color}} >
         欢迎来到菜鸟教程12
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

export default App;




