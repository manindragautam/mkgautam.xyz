import React from 'react'
import Layout from '../components/Layout'
import MyPic from '../images/manindra-gautam.jpg'

export default () => <Layout>
  <div className="w-full lg:flex pt-8 px-4 m-auto lg:border-b lg:border-grey-light">
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
        <img className="w-12 h-12 rounded-full mr-4" src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png" alt="Ruby on Rails" />
        <img className="w-12 h-12 rounded-full mr-4" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="ReactJS" />
        <img className="w-12 h-12 rounded-full mr-4" src="https://avatars0.githubusercontent.com/u/13142323?s=400&v=4" alt="Redux" />
        <img className="w-12 h-12 rounded-full mr-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
        <img className="w-16 h-16 rounded-full" src="https://static.open-open.com/lib/uploadImg/20150119/20150119104514_2.png" alt="Docker" />
      </div>
    </div>
  </div>
</Layout>
