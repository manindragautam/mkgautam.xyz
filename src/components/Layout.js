import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

export default ({ children }) => (
    <header className='m-auto max-w-xl'>
        <Helmet>
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <meta name="author" content="Manindra Gautam" />
        </Helmet>
        <Navigation />
        {children}
        <Footer />
    </header>
)
