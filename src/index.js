import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

// Get User Info from Local, and save into memrory
const user = storageUtils.getUser()
memoryUtils.user = user

// Render <APP /> into index.html
ReactDOM.render(<App />, document.getElementById('root'));
