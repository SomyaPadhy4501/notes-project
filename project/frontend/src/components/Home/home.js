import React from 'react'
import img from './home.jpg'
import Card from '../Card/card'
import "./home.css"
import note from "./Notes.jpg"
import ControlledCarousel from '../Slider/slider'
import { Link } from "react-router-dom";

const Home = () => {
  

  return (
    <><div > <img src={img} alt="This is home" /> </div>
      <div className='content'><h1>Welcome to iNotebook</h1>This is the best place to save your notes.<br />
        Save your notes and you wont have to hustle here and there to find your notes.<br /> Click on the button to login and make a note.<br /></div>
        <Link to="/login">
      <button className='hi'>Login</button>
      </Link>
    
      <div className='slider'><ControlledCarousel/></div>
      <div className='card'><Card img={note} CardTitle="Pin Notes" CardBody="We have the best to offer and one can easily save edit or delete their notes."/><h2>Our services are
        at very low cost.<br/> Our services are free for first 5 gb of notes.</h2></div>
        
    </>
  )
}

export default Home