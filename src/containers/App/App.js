/*
    eslint
        jsx-a11y/anchor-is-valid: off
*/

import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'antd/lib/layout'
import Posts from 'containers/Posts'
import './App.css'

// import logo from './logo.svg'

const {
    Header,
    Content,
} = Layout

const App = () => (
    <div className="App">
        <Helmet>
            <html lang="en" />
            <title>[cra-ssr] server side rendering for create react app</title>
        </Helmet>
        <Layout>
            <Header>
                <div className="App-test-logo">WATSKI</div>
            </Header>
            <Content>
                <Posts />
            </Content>
        </Layout>
    </div>
)

export default App
