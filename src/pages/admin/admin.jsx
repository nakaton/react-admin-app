import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

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
                    <Content style={{backgroundColor: '#fff'}}>Content</Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>Copyright © 2019 - 2020 Caffee Shop</Footer>
                </Layout>
            </Layout>
        )
    }
}