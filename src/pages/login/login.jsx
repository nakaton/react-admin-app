import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';

import './login.less'
import logo from './images/logo.png'

const Item = Form.Item;

/*
Login Component
*/
class Login extends Component{

    handleSubmit = (event) => {
        // Prevent Form auto submit
        event.preventDefault();

        const form = this.props.form;
        
        // Get input data from form
        const values = form.getFieldsValue(); 
        console.log(values);
    }

    render() {
        
        // Get the form which pass from WrapLogin component
        const form = this.props.form;
        const {getFieldDecorator} = form;

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt='logo'></img>
                    <h1>Caffe Shop Admin</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [
                                        { required: true, message: 'Please input your username!' },
                                        { min: 4, message: 'The min length of Username is 4 !' },
                                        { max: 12, message: 'The max lenght of Username is 12!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: "Username should 'alpha', 'number' or '_' !" },
                                    ],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />,
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {})(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/* 
包装Form组件生成一个新的组件：Form(Login)
新组件会向Form组件提供一个强大的对象属性：form
*/
const WrapLogin = Form.create()(Login);
export default WrapLogin;

/*
1.前台表单验证
2.收集表单输入数据
*/
