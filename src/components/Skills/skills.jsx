import React from 'react' ;
import './skills.css';
import solid from '../../assets/solid.svg';
import liqiud from '../../assets/liqiud.svg';
import gas from '../../assets/gas.svg'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate Web Designer with experience in creating visually appealling and user-friendly websites.I have a strong inderstanding of design and a keen eye for detail.I am proficient in HTML,CSS and JavaScript,as well as design software such as Adobe Photoshop and Illustrator</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={solid} alt="UIDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text,you can write your own content here.</p>
                </div>
             </div>
             <div className="skillBar">
                <img src={liqiud} alt="WebDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the production ready website.</p>
                </div>
             </div>
             <div className="skillBar">
                <img src={gas} alt="AppDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>You can write text related to mobile app development.</p>
                </div>
             </div> 
        </div>
    </section>
  );
}

export default Skills