import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home/home'
import Categort from '../category/category'
import Product from '../product/product'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Footer, Sider, Content } = Layout

/*
Admin Component
*/
export default class Admin extends Component{

    render(){
        const user = memoryUtils.user
        // Check whether User exist in memory
        if(!user || !user._id) {
            // Auto jump to login page (in render())
            return <Redirect to='/login' />
        }

        return(
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: '#fff', height: '100%'}}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Categort} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/pie' component={Pie} />
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>Copyright © 2019 - 2020 Caffee Shop</Footer>
                </Layout>
            </Layout>
        )
    }
}