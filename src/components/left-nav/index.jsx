import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import './index.less'
import menuList from '../../config/menuConfig'
import logo from '../../assets/images/logo.png'

const { SubMenu } = Menu;

/*
Left Navigation Component
*/
export default class LeftNav extends Component {
    /*
    Base on menuList data create Menu item array
    Implement by map() or by reduce()
    */
    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
            if(!item.children){
                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                return(
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                    {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    getMenuNodes = (menuList) => {
        return menuList.reduce((pre, item) => {
            // add <Menu.item> into pre
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            }else{
                // add <Submenu> into pre
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                    {this.getMenuNodes(item.children)}
                    </SubMenu>
                ))
            }
            return pre
        },[])
    }

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
                    {/* <Menu.Item key="/home">
                        <Link to='/home'>
                            <Icon type="home" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="/products"
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
                    </SubMenu> */}

                    {
                        this.getMenuNodes(menuList)
                    }
                </Menu>
            </div>
        )
    }
}