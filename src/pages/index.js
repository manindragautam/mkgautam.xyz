import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import MyPic from '../images/manindra-gautam.jpg'
import RailsIcon from '../images/rails.svg'
import ReactIcon from '../images/react.svg'
import ReduxIcon from '../images/redux.svg'
import PythonIcon from '../images/python.svg'
import DockerIcon from '../images/docker.png'

export default () => <Layout>
  <Helmet>
    <title>Manindra Gautam</title>
    <meta name="Description" content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"></meta>
    <link rel="canonical" href="https://mkgautam.xyz" />
  </Helmet>
  <main className="w-full lg:flex pt-8 px-4 m-auto tracking-wide">
    <div className="w-full justify-center lg:w-1/3 flex items-center">
      <img className="w-64 h-64 rounded-full mr-4" src={MyPic} alt="Manindra Gautam" />
    </div>
    <div className="w-full lg:w-2/3 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <div className="text-black text-2xl pb-1 border-b border-grey-light">Manindra Kumar Gautam</div>
        <p className="text-md text-grey-dark flex items-center pt-1">
          {'< Software Engineer /'}>
        </p>
        <p className="text-grey-darker text-base mt-6">
        Hi, I am Manindra, an engineer located at Lucknow, India, interested in Machine Learning and DevOps, having 2+ years experience developing software in a fast-paced, startup like environment, skilled in Ruby on Rails, ReactJS, Redux, GIT, Heroku Cloud, Linux, Agile.
        <br />
        <br />
        At Akaruilabs, I'm currently working on real-estate market application with Ruby on Rails and ReactJS technologies.
        <br />
        <br />
        In my free time I try to learn something, contribute to open source and listen mind relaxing music.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-12 h-12 rounded mr-4" src={RailsIcon} alt="Ruby on Rails" />
        <img className="w-12 h-12 rounded mr-4" src={ReactIcon} alt="ReactJS" />
        <img className="w-12 h-12 rounded mr-4" src={ReduxIcon} alt="Redux" />
        <img className="w-10 h-10 rounded mr-4" src={PythonIcon} alt="Python" />
        <img className="w-16 h-16 rounded" src={DockerIcon} alt="Docker" />
      </div>
    </div>
  </main>
</Layout>
