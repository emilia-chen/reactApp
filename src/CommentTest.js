import React from "react"
import ComentList from "./ComentList"
 
class CommentTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentText: "this is parent text",
        }
    }
 
    fn(data) {
        this.setState({
            parentText: data //把父组件中的parentText替换为子组件传递的值
        },() =>{
           console.log(this.state.parentText);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
        });
    }
 
    render() {
        return (
            <div>
                //通过绑定事件进行值的运算，这个地方一定要记得.bind(this)，
          //  不然会报错，切记切记，因为通过事件传递的时候this的指向已经改变
                <ComentList arr={this.state.arr} pfn={this.fn.bind(this)}>
                </ComentList>
                <p>
                    text is {this.state.parentText}
                </p>
        
            </div>
 
        )
    }
}
 
export default CommentTest;  