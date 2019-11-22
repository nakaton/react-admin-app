import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import './index.less'

import logo from '../../assets/images/logo.png'

const { SubMenu } = Menu;

/*
Left Navigation Component
*/
export default class LeftNav extends Component {
    render() {

        return (
            <div className="left-nav">
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='logo'/>
                    <h1>Caffe Shop Admin</h1>
                </Link>
                <Menu
                    mode="inline"
                    theme="dark" 
                >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Home</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="appstore" />
                            <span>Products</span>
                        </span>
                        }
                    >
                        <Menu.Item key="2">
                            <Icon type="bars" />
                            <span>Category</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="coffee" />
                            <span>Product</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}