import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

export default ({ children }) => (
    <header className='m-auto max-w-4xl'>
        <Helmet>
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <meta name="author" content="Manindra Gautam" />
        </Helmet>
        <Navigation />
        <main className="w-full pt-8 px-4 md:px-0 m-auto tracking-wide">
            {children}
        </main>
        <Footer />
    </header>
)
