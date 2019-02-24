import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet';
import UnHead from '../components/UnHead';
import Space from '../components/Space';

export default () => <Layout>
    <Helmet>
        <title>Manindra Gautam</title>
        <meta name="Description" content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"></meta>
        <link rel="canonical" href="https://mkgautam.xyz/projects" />
    </Helmet>
    <div className="w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
            <UnHead title='Akaruilabs India Pvt Ltd' />
            <ul className='pt-4 text-base lg:text-lg'>
                <li className='my-2'><a className='font-bold' href='https://www.equitymultiple.com/' target='_blank' rel='noopener noreferrer'>Equity Multiple</a>:
                EQUITYMULTIPLE is an online marketplace for private real estate transactions. It enables individual and institutional investors to invest alongside the market’s most sophisticated sponsors in many commercial real estate assets.
                </li>
                <li className='my-2'><a className='font-bold' href='https://zeehaus.com/' target='_blank' rel='noopener noreferrer'>Zeehaus</a>:
                Zeehaus is a real estate equity sharing marketplace and ownership management platform. It is the first and only, one-stop marketplace to connect homeowners and homebuyers with investors who are enabled to purchase fractional ownership in US real estate digitally,
                having a reward sharing community and equity sharing marketplace that helps you buy, sell, or get you investing in property the simple and secure way levaraging Blockchain technology. By digitalizing the buying process, lowering the cost of acquiring the property and associated monthly housing costs, while simultaneously enabling sound investment opportunities for investors interested in the real estate market.
                </li>
            </ul>
            <Space />
            <UnHead title='Other Projects' />
            <ul className='pt-4 text-base lg:text-lg'>
                <li className='my-2'><a className='font-bold' href='https://www.npmjs.com/package/codekiq-ui' target='_blank' rel='noopener noreferrer'>Codekiq-UI</a>:
                Open Source UI framework NPM package for React app, the components are based on modern web design approach, having neat and clean code structure (jQuery free) to easily maintain your components without any hassle.
                </li>
            </ul>
        </div>
    </div>
</Layout>
