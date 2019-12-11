import React, { Component } from 'react'
import './index.less'

import weather from '../../assets/images/Weather-512.png'

/*
Header Component
*/
export default class Header extends Component {
    render() {

        return (
            <div className="header">
                <div className="header-top">
                    <span>Welcome, Admin</span>
                    <a href="www.google.com">Quit</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">Home</div>
                    <div className="header-bottom-right">
                        <span>2019-12-11 09:19:30</span>
                        <img src={weather} alt="Weather"/>
                        <span>Cloudy</span>
                    </div>
                </div>
            </div>
        )
    }
}