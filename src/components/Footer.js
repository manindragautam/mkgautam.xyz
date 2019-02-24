import React from 'react';
import { Link } from 'gatsby'

export default () => (
    <footer className='m-auto text-center my-12 border-t border-grey-light'>
        <div className='mt-8'>
            <ul className='list-reset inline-flex'>
                <li className='mr-4'><a href='https://linkedin.com/in/manindragautam/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
                <li className='mr-4'><a href='https://github.com/manindragautam' target='_blank' rel='noopener noreferrer'>Github</a></li>
                <li className='mr-4'><a href='https://twitter.com/manindragautam' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
                <li className='mr-4'><a href='mailto:manindragautam@icloud.com' target='_blank' rel='noopener noreferrer'>Email</a></li>
            </ul>
        </div>
        <div className='mt-4'>
            <sub className='text-2xl'>&copy;</sub> 2019 <Link to='/'>Manindra Gautam</Link>. All rights reserved.
        </div>
    </footer>
)