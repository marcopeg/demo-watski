/*
    eslint
        jsx-a11y/anchor-is-valid: off
*/

import React from 'react'
import { Helmet } from 'react-helmet'

// import logo from './logo.svg'
import './App.css'

const App = () => (
    <div className="App">
        <Helmet>
            <html lang="en" />
            <title>[cra-ssr] server side rendering for create react app</title>
        </Helmet>
        Hello Victor!
    </div>
)

export default App
