import React from 'react';
import ReactDom from 'react-dom'
// import { renderToString } from 'react-dom/server'
import Header from '../common/Header'

ReactDom.hydrate(<Header />,
document.getElementById('root')
)