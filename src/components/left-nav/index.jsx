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
                    <Menu.Item key="/home">
                        <Link to='/home'>
                            <Icon type="home" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="products"
                        title={
                        <span>
                            <Icon type="appstore" />
                            <span>Products</span>
                        </span>
                        }
                    >
                        <Menu.Item key="/category">
                            <Link to='/category'>
                                <Icon type="bars" />
                                <span>Category</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to='/product'>
                                <Icon type="coffee" />
                                <span>Product</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user">
                        <Link to='/user'>
                            <Icon type="user" />
                            <span>User</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/role">
                        <Link to='/role'>
                            <Icon type="skin" />
                            <span>Role</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="charts"
                        title={
                        <span>
                            <Icon type="area-chart" />
                            <span>Charts</span>
                        </span>
                        }
                    >
                        <Menu.Item key="/charts/bar">
                            <Link to='/charts/bar'>
                                <Icon type="bar-chart" />
                                <span>Bar Chart</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/charts/line">
                            <Link to='/charts/line'>
                                <Icon type="line-chart" />
                                <span>Line Chart</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/charts/pie">
                            <Link to='/charts/pie'>
                                <Icon type="pie-chart" />
                                <span>Line Chart</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}