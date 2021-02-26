import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import MyPic from '../images/mkgautam.jpeg'
import RailsIcon from '../images/rails.svg'
import ReactIcon from '../images/react.svg'
import ReduxIcon from '../images/redux.svg'
import GolangIcon from '../images/go-lang.svg'
import UnHead from '../components/UnHead';
import Text from '../components/Text';

const Index = () => <Layout>
  <Helmet>
    <title>Manindra Gautam</title>
    <meta name="Description" content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"></meta>
    <link rel="canonical" href="https://mkgautam.xyz" />
  </Helmet>
  <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
    <div>
      <img className="w-48 h-48 rounded-full" src={MyPic} alt="Manindra Gautam" />
    </div>
    <div className="leading-normal md:col-span-3">
      <div className="mb-8">
        <UnHead title='Manindra Kumar Gautam' />
        <p className="text-lg text-grey-darkest flex items-center pt-2">
          &lt; Software Engineer / &gt;
        </p>
        <Text>
          Hi, I am Manindra, a software engineer located in Mumbai, India, having 4+ years of experience developing software, skilled in Ruby on Rails, ReactJS, Redux, GIT, Golang, Linux, Agile.
          <br /><br />
          At Ardentia, I'm currently using Ruby on Rails and ReactJS technologies for various projects.
          <br /><br />
          In my free time I try to learn something, contribute to open source and listen mind relaxing music.
        </Text>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <img className="w-12 h-12 rounded" src={RailsIcon} alt="Ruby on Rails" />
        <img className="w-12 h-12 rounded" src={ReactIcon} alt="ReactJS" />
        <img className="w-12 h-12 rounded" src={ReduxIcon} alt="Redux" />
        <img className="w-12 h-12 rounded" src={GolangIcon} alt="Golang" />
      </div>
    </div>
  </div>
</Layout>

export default Index;