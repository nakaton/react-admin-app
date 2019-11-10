import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';

import './login.less'
import logo from './images/logo.png'

/*
Login Component
*/
export default class Login extends Component{

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt='logo'></img>
                    <h1>Caffe Shop Admin</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}