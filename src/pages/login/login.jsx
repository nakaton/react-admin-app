import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button, message } from 'antd';

import './login.less'
import logo from '../../assets/images/logo.png'
import { reqLogin } from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'


const Item = Form.Item;

/*
Login Component
*/
class Login extends Component{

    handleSubmit = (event) => {
        // Prevent Form auto submit
        event.preventDefault();

        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Send Ajax Request!');

                // 解构values
                const {username, password} = values;
                
                // Call Login API
                const result = await reqLogin(username, password) // success : {status: 0, data: }  Failure: {status:1, msg: }
                console.log("Login Result: ", result)

                if (result.status === 0){
                    // Login Success
                    message.success('Login Success')

                    const user = result.data
                    // Save User Info into memory using memoryUtils
                    memoryUtils.user = user
                    // Save User Info into local using storageUtils
                    storageUtils.saveUser(user)

                    // Jump to Admin Page (Not need to back to login, so use 'replace()', otherwise use 'push()')
                    this.props.history.replace('/')
                } else {
                    // Login Failure
                    message.error(result.msg)
                }

            } else {
                console.log('Form Validate Failure!')
            }
        });
    }

    /*
    Custom validation for password
    */
    validatePwd = (rule, value, callback) => {
        console.log(value);
        if(!value){
            callback('Password is required!')
        }else if(value.length < 4 ) {
            callback('The min lenght of Password is 4!')
        }else if(value.length > 12) {
            callback('The max length of Password is 12!')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback("Password should 'alpha', 'number' or '_' !")
        }else{
            callback()  //vaidate success
        }
    }

    render() {
        // User already exist in memory, redirect to Admin page
        const user = memoryUtils.user
        if(user && user._id) {
            // Auto jump to Admin page (in render())
            return <Redirect to='/' />
        }

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
                                    // Antd predefined validate
                                    rules: [
                                        { required: true, message: 'Please input your username!' },
                                        { min: 4, message: 'The min length of Username is 4 !' },
                                        { max: 12, message: 'The max lenght of Username is 12!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: "Username should 'alpha', 'number' or '_' !" },
                                    ],
                                    initialValue: 'admin'
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
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            validator : this.validatePwd
                                        }
                                    ],
                                    initialValue: 'admin'
                                })(
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


// 学习总结
/*
1.前台表单验证
2.收集表单输入数据
*/

/*
async and await
1.作用
    简化promise对象的使用： 不用再使用then()来制定成功/失败的回调函数
    以同步编码（没有回调函数）方式实现异步流程
2.哪里写await
    在返回promise调表达式左侧写await：不想要promise， 想要promise异步执行调成功value数据
3.在哪里写async
    await所在函数（最近的）定义的左侧
*/
