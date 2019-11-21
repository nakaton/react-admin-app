import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils'

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
            <div>
                Hello {user.username}
            </div>
        )
    }
}