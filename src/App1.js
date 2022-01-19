import React, { memo,useReducer,useRef,Component,Fragment, useContext,useEffect, useState, useMemo, useCallback } from 'react';

class App1 extends Component {
  

  constructor(props) {
    super(props);
    this.state = {};
  }


   render() {
  console.log('render1')
    return  <div onClick={ () =>{
    console.log('click')
    this.setState({
    	a:2
    })
    // setCount(count + 1)
  }}>123{this.state.a}</div>
   }
}
export default App1;

