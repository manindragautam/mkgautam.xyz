import React from 'react'
import Navigation from './Navigation';

export default ({ children }) => (
    <div className='m-auto max-w-xl'>
        <Navigation />
        {children}
    </div>
)
