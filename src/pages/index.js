import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import MyPic from '../images/manindra-gautam.jpg'
import RailsIcon from '../images/rails.svg'
import ReactIcon from '../images/react.svg'
import ReduxIcon from '../images/redux.svg'
import PythonIcon from '../images/python.svg'
import GraphqlIcon from '../images/graphql.svg'
import UnHead from '../components/UnHead';
import Text from '../components/Text';

export default () => <Layout>
  <Helmet>
    <title>Manindra Gautam</title>
    <meta name="Description" content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"></meta>
    <link rel="canonical" href="https://mkgautam.xyz" />
  </Helmet>
  <div className='lg:flex'>
    <div className="w-full justify-center lg:w-1/3 flex items-center">
      <img className="w-48 h-48 md:w-64 md:h-64 rounded-full mr-4" src={MyPic} alt="Manindra Gautam" />
    </div>
    <div className="w-full lg:w-2/3 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <UnHead title='Manindra Kumar Gautam' />
        <p className="text-lg text-grey-darkest flex items-center pt-2">
          &lt; Software Engineer / &gt;
        </p>
        <Text>
          Hi, I am Manindra, an engineer located at Lucknow, India, interested in Machine Learning and DevOps, having 2+ years experience developing software in a fast-paced, startup like environment, skilled in Ruby on Rails, ReactJS, Redux, GIT, Heroku Cloud, Linux, Agile.
          <br /><br />
          At Akaruilabs, I'm currently working on real-estate market application with Ruby on Rails and ReactJS technologies.
          <br /><br />
          In my free time I try to learn something, contribute to open source and listen mind relaxing music.
        </Text>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-12 h-12 rounded mr-4" src={RailsIcon} alt="Ruby on Rails" />
        <img className="w-12 h-12 rounded mr-4" src={ReactIcon} alt="ReactJS" />
        <img className="w-12 h-12 rounded mr-4" src={ReduxIcon} alt="Redux" />
        <img className="w-10 h-10 rounded mr-4" src={GraphqlIcon} alt="GraphQL" />
        <img className="w-10 h-10 rounded mr-4" src={PythonIcon} alt="Python" />
      </div>
    </div>
  </div>
</Layout>
