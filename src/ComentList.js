import React from "react"
 
class ComentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            childText: "this is child text"
        })
 
    }
    clickFun(text) {
        this.props.pfn(text)//这个地方把值传递给了props的事件当中
    }
    render() {
        return (
            <div className="list">
                //通过事件进行传值，如果想得到event，可以在参数最后加一个event，
                //这个地方还是要强调，this，this，this
                <button onClick={this.clickFun.bind(this, this.state.childText)}>
                    click me
                </button>
            </div>
        )
    }
}
 
export default ComentList;     