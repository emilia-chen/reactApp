import React, { useMemo,Component,useCallback, useState,memo} from 'react';
import logo from './logo.svg';
import './App.css';
//场景10
function Father() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
   
const [data, setData]=useState({
   name: "Peter",
   age: 'mas'
});
    // const userInfo ={
    //    name: "Peter",
    //    age: 'mas'
    // }
   const test= useCallback(() => {
      console.log('test')
   }, []);
 const userInfo = useMemo(() => {
   console.log('userInfo')
  return data;
}, [data]);


  // const [userInfo, setUserInfo] = useState({
  //      name: "Peter",
  //      age: 'mas'
  // });
    return (
        <div>
            <div>
                <Demo2 test={test} userInfo={userInfo} b='44' />
            </div>
            <div>
                {value}
                <div
                    onClick={() => {
                      
              //setData({...data})
                        setValue(value + 1);
             //   userInfo.name='444'

               // setUserInfo(userInfo)
                    }}
                >相册</div>
            </div>
        </div>
    );
}
  const Demo2 = React.memo((props) => {
   const { userInfo } = props;
    console.log('sub render',props);
    return (
        <>
            <span>{userInfo.count}</span>
        </>
    );
  })
 
// const Demo2=function(props){
//  const { userInfo } = props;
//     console.log('sub render',props);
//     return (
//         <>
//             <span>{userInfo.count}</span>
//         </>)
// }
//场景9
//  function Father() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
 

//   const handleClickButton1 = () => {
//     setCount1(count1 + 1);
//   };
 
 
//   const handleClickButton2 = useCallback(() => {
   
//     setCount2(count2 + 1);
//      console.log('useback',count2)
//   },[]);
 
//     // const handleClickButton2 = () => {
//     //     setCount2(count2+ 1);
//     // };
//  console.log('father',count2)
//   return (
//     <div>
//       <div>
//         <Button onClickButton={handleClickButton1}>Button1</Button>
//       </div>
//       <div>
//         <Button count={count2} onClickButton={handleClickButton2}>Button2</Button>
//       </div>
//     </div>
//   );
// }
 
//  const Button = React.memo((props) => {
// console.log('memo',props)
// const { onClickButton, children } = props;
//     return (
//         <>
//             <div onClick={onClickButton}>{children}</div>
//             <span>{Math.random()}</span>
//         </>
//     );
//   })


// const Button=function(props){
// console.log('memo')
// const { onClickButton, children } = props;
//     return (
//         <>
//             <div onClick={onClickButton}>{children}</div>
//             <span>{Math.random()}</span>
//         </>
//     );
// }


//场景8

//  class Father extends Component {
//     state = {
//         count: 1,
//     };
//     onClick = () => {
//         const { count } = this.state;
//         console.log('this.state',this.state)
//         this.setState({count:2});
//     };
//     render() {
//         const { count } = this.state;
//         console.log('father render');
//         return (
//             <div>
//                 <Demo1 count={count} />
//                 <div onClick={this.onClick}>测试</div>
//             </div>
//         );
//     }
// }
 
// function Father() {
//     const [count, setCount] = useState(1);
//     const [value, setValue] = useState(1);
//     console.log('father render')
//     return (
//         <div>
//             <Demo1 count={count} />
//             <div>value{value}</div>
//             <div
//                 onClick={() => {
//                   //  setValue(value + 1);
//                  setCount(count + 1);
//                 }}
//             >
//                 测试
//             </div>
//         </div>
//     );
// }
 
 

 
 interface Props {
    count: number;
}

const Demo1 = React.memo((props) => {

   const [count, setCount] = useState(1);

const onClick=()=>{
  setCount(count)
}


  console.log(props, 'props');
    return <div>{props.count}
    ...<div onClick={onClick}>
      4455
    </div>
    </div>;
})
//  function Demo1(props: Props) {
//    const [count, setCount] = useState(1);

// const onClick=()=>{
//   setCount(count)
// }


//   console.log(props, 'props');
//     return <div>{props.count}
//     ...<div onClick={onClick}>
//       4455
//     </div>
//     </div>;
//  }

 
 





//父组件hooks语法
 function Test() {
    const [state, setState] = useState({ a: 1, b: 1, c: 1 });
    const [value, setValue] = useState(11);
    return (
        <div>
            <div>
                state{state.a},{state.b}
            </div>
            <div
              
                onClick={() => {
                    //@ts-ignore
                    //setState({ a: 2, b: 1 });
                    //@ts-ignore
                   setState({ a: 1, b: 2 });
                  //setState(state);
                    console.log(state, 'state');
                }}
            >
                测试
            </div>
            <hr />
            <div>value{value}</div>
            <div
                
                onClick={() => {
                    setValue(12);
                }}
            >
                测试
            </div>
            <Demo value={state} d={value}/>
        </div>
    );
}
 
 
 class Demo extends React.PureComponent<Props> {
    render() {
        const { props } = this;
        let a;
        console.log('demo render',props,a);
        a=1
       // const [value,setValue] = useState(99);
        return (

            <div>
                {props.value.a},{props.value.b}
                ..... {props.d}
            </div>
        );
    }
}
 
 
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
         欢迎来到菜鸟教程
          </p>
            <Father/>
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




