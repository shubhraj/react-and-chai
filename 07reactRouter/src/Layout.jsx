import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom';

export class Layout extends Component {
  render() {
    return (
     <>
        <Header />
            <Outlet />
        <Footer />
     </>
    )
  }
}

export default Layout