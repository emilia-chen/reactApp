//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React, { memo,useReducer,useRef,Component,Fragment, useContext,useEffect, useState, useMemo, useCallback } from 'react';
import App1 from './App1.js';

function Demo9() {
  const [count, setCount] = useState(0);
    const [data, setData] = useState({a:1});
  const handle = () => {
    console.log("handle", count);
    return count;
  };
   // useEffect(() => {
   //   console.log("child-useEffect");
     
   // }, [count]);
  const handle1 = useMemo(() => {
    console.log("handle1", count);
    return count;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle2 = useMemo(() => {
    console.log("handle2", count);
      // 大计算量的方法
    return count;
  }, [count===2]);

  console.log("render-parent");
 //这样返回的函数就会在组件重渲染时产生相同的句柄
  // const onClick = useMemo(() => {
  //   //这里返回的依然是函数
  //   return () => {
  //     console.log('click')
  //   }
  // }, []);
//let a=0
  const onClick = () =>{
    console.log('click')
    // setCount(count + 1)
  }
  const ref=useRef(0)
  return (
    <div>
      <p>
        demo9: {count}
        <button onClick={() => {
        //  setCount(count + 1)
          //setData(data)
          // setCount(1 )
          // if(count===0){
          //   setCount(count + 1)
          // }else{
          //    setCount(1)
          // }
          setTimeout(()=>{
            setCount(ref.current+= 1)

          },1000)
           
        }}>++count</button>
      </p>
      <p>-------------------</p>
      <Child handle={count} />
    </div>
  );
}

function Child({ handle }) {
  console.log("render-child",handle);
  return (
    <div>
      <p>child</p>
      <p>props-data: {handle}</p>
    </div>
  );
}
// const  Child=memo(function Child({ handle ,onClick}) {
//   console.log("render-child",handle);
//  const [count1, setCount1] = useState(0);

//  const onClick1 = () =>{
//     console.log('click1')
//      setCount1(count1 + 1)
//   }

//   return (
//     <div>
//       <p>child{count1}</p>
//       <p onClick={onClick1}>props-data: {handle}</p>
//     </div>
//   );
// });


// function Child({ event, data }) {
//   console.log("child-render");
//   // 第五版
//   useEffect(() => {
//     console.log("child-useEffect",event);
//     event();
//   }, [event]);
//   return (
//     <div>
//       <p>child</p>
//       {/* <p>props-data: {data.data && data.data.openCode}</p> */}
//       <button onClick={event}>调用父级event</button>
//     </div>
//   );
// }

const set = new Set();

function Demo8() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  // 第一版
  // const handle = async () => {
  //   const response = await fetch(
  //     "https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   console.log("handle", data);
  //   setData(res);
  // };

  // 第二版
  // const handle = useCallback(async () => {
  //   const response = await fetch(
  //     "https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   console.log("handle", data);
  //   setData(res);
  // });

  // 第三版
  // const handle = useCallback(async () => {
  //   const response = await fetch(
  //     "https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   setData(res);
  //   console.log("useCallback", data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // 第四版
  // const handle = useCallback(async () => {
  //   const response = await fetch(
  //     “https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
  //   );
  //   const res = await response.json();
  //   setData(res);
  //   console.log(“parent-useCallback", data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // 第五版
  const handle = useCallback(async () => {
    const response = await fetch(
      "https://www.mxnzp.com/api/lottery/common/latest?code=ssq"
    );
    const res = await response.json();
    setData(res);
    console.log("parent-useCallback", data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  set.add(handle);

  console.log("parent-render====>", data);
  return (
    <div>
      <button
        onClick={e => {
          setCount(count + 1);
        }}
      >
        count++
      </button>
      <p>set size: {set.size}</p>
      <p>count:{count}</p>
      <p>data: {data.data && data.data.openCode}</p>
      <p>-------------------------------</p>
      <Child event={handle} />
    </div>
  );
}
// const AddCount = () => {
// const reducer = (state, action) =>  {
//  if(action.type === 'add'){
//   return {
//   ...state,
//   count: state.count +1,
//   }
//  }else {
//    //state.count=state.count+1;
//    return state
//   }
//  }
// const addcount = () => { 
//   dispatch({
//     type: 'add'
//   })
//  }
// const [state, dispatch] = useReducer(reducer, {count: 0})
// return (

// <p>{state.count}</p>
// <button onClick={addcount}>count++</button>
// </>
// )

// }

function Example() {
  // 声明一个叫 "count" 的 state 变量
  console.log(44)
  const [count, setCount] = useState(0);
    const [obj, setData] = useState();
const b={b:3};
const like =0;
const lastCount=useRef(count)
  // const ref1=useRef({a:1});
   
     useEffect(() => {
     //  b.b=4;
console.log('useEffect')
lastCount.current=count
// setInterval(()=>{
//   console.log(like)
// },1000)
     // console.log('ref1',ref1,'b',b)

     },[])


const handleAlert=()=>{
 console.log('handleAlert')
     setTimeout(()=>{
     alert('you click'+count)
     })
 }
console.log(123)
//handleAlert()
//count=2
//handleAlert()
  return (
    <div>
      <p>You clickedtimes</p>
      <button onClick={

   () => {setCount(count+1)
   console.log('count',lastCount.current)
    }


    }>Click me</button>
    <button onClick={

    handleAlert
   }

    >show alert</button>
    </div>
  );
}
function Demo3() {
  const b={a:1}
  const [data, setData] = useState(b);
  useEffect(() => {
    console.log("useEffect—[]");
    fetch("https://www.mxnzp.com/api/lottery/common/latest?code=ssq")
      .then(res =>
      {
         console.log('res12',res)
       res.json()
      })
      .then(res => {
        console.log('res',res)
       var c={...b}
        //b.push({b:2})
        setData(c);
      });
  }, []);

  useEffect(() => {
    console.log("useEffect ---> 无依赖");
  });

  useEffect(() => {
    console.log("useEffect 依赖data： data发生了变化");
  }, [data]);

  return (
    <div>
      <p>data: {JSON.stringify(data)}</p>
        <button onClick={

   () => {



    }


    }>Click me</button>
    </div>
  );
}

const MyContext=React.createContext();
//usecontext
function Demo5() {
  const b={a:1}
  const [value, setValue] = useState('init');
  console.log("Demo5");
  return (
    <div>
      {(() => {
        console.log("render");
        return null;
      })()}
      <button onClick={() => {
        console.log('click：更新value')
      // b.a=2
        setValue('init2')
      }}>
        改变value
      </button>
      <MyContext.Provider value={value}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </div>
  );
}

function Child1() {
  const value = useContext(MyContext);
  console.log("Child1-value", value);
  return <div>Child1-value:{value} </div>;
}

function Child2(props) {
  return <div>Child2</div>;
}

// const Child2=React.memo((props)=>{
//   console.log('props',props)
//   return <div>Child2</div>;
// })


class App extends Component {
  
  state={
    a:1
  }
  
  render() {
    console.log('render')
    return (

      <div className="App">
<App1/>
        <header className="App-header">
         <button onClick={() => {
      this.setState({
        a:1
      })
     
      }}>
        改变value
      </button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
         欢迎来到菜鸟教程1
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Demo9/>

          
         { //<Demo8/>
           }
          {//<AddCount/>
          }
          {//<Example/>
          }
         {//<Demo3/>
         }
         {//<Demo5/>
         }
        </header>
      </div>
    );
  }
}



export default App;




