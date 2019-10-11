import React from 'react';
import { render } from 'react-dom';
import "antd/dist/antd.css";
import './styles/global.css'
import store from './redux/store/index'
import Root from './Root'


render(<Root store={store} />, document.getElementById('root'));