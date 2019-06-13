import React from 'react'
import {Link} from 'react-router-dom'
import Card from './components/Card';
import Section from './components/Section';
import Wave from './components/Wave';
//import staticdata from '../../staticdata.json'
import Cell from './components/Cell'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
  padding-left:40px;
`



 const App = () => (
  <div>
    <Header/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src='https://i.ibb.co/K0DWPVW/logo-framer.png' width="50" />
          <img src='https://i.ibb.co/ZX3r25h/logo-xcode.png' width="50" />
          <img src=' https://i.ibb.co/x5cyjXZ/logo-react.png' width="50" />
          <img src='https://i.ibb.co/0s28k5f/logo-sketch.png' width="50" />
          <img src='https://i.ibb.co/vVVtF7z/logo-studio.png' width="50" />
          <img src='https://i.ibb.co/WDpkwJ2/logo-swift.png' width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Started Learning!.Pickup your Learning Path</h2>
      <div className="CardGroup">
        <Card 
          title="Mongo DB"
          text="10 sections"
          image='https://cdn.worldvectorlogo.com/logos/mongodb.svg' />
        <Card 
          title="Express JS"
          text="12 sections"
          image='https://www.ateamindia.com/wp-content/uploads/2019/03/main-qimg-f406db5658b5d0dade4d70a989560439.png' />
        <Card 
          title="React JS"
          text="5 sections"
          image='http://innovativeteams.net/wp-content/uploads/2017/04/react.png' />
        <Card 
          title="Node JS"
          text="10 sections"
          image='https://cdn-images-1.medium.com/max/1600/1*DoK4HJmJY84X199HZE85vw.jpeg' />
        <Card
          title="Redux"
          text="5 sections"
          image='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png'/>  
        <Card
          title="Git"
          text="5 sections"
          image='https://www.theindianwire.com/wp-content/uploads/2019/05/maxresdefault-2.jpg'/> 
      </div>
    </div>
    <Section
      image='https://shewalkars.com/wp-content/uploads/2017/10/footer-background-2.jpg'
      //logo='http://innovativeteams.net/wp-content/uploads/2017/04/react.png'
      title="Full Stack JavaScript Development"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
     />
     <Footer/>  

  </div>
)

export default App

