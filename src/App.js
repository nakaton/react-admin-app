import React from 'react';
import './App.css';
import { Button, message } from 'antd';

export default class App extends React.Component{
  handleClick = () => {
    message.success('We are success!');
  }

  render() {
    return <Button type="primary" onClick={this.handleClick}>Primary</Button>
  }
}
