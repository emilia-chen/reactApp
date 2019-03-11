import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
class ReactNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  console.log('e1e',this.props )
  }

  render() {
    return (
      <div>
   <Button type="primary" onClick={openNotification}>Open the notification box</Button>,

      </div>
    );
  }
}

export default ReactNotification;




