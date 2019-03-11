import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Upload, message, Button, Icon,
} from 'antd';
import {  Link } from "react-router-dom";
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    console.log('info',info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class ReactButton extends Component {
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

  render() {
    let size=this.state.size
    return (
    <div>
    <Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>,
  </div>
    );
  }
}

export default ReactButton;




