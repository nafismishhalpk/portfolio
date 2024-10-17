import React from 'react'
import './intro.css'
import mypic from '../../assets/mypic1bgr.png'
import btnImg from '../../assets/briefcase.svg'
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Nafis</span> <br/>Website Designer</span>
            <p className="introPara">I am a skilled Web Developer with experience in creating <br /> visually appealing and user friendly Websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="hireme" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={mypic} alt="mypic" className="bg" />
    </section>
  )
}

export default Intro;