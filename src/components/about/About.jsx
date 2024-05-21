import "./about.css"
import aboutme from "../../img/aboutme.png"
import planetbee from "../../img/planetbee.png"
import planetbeeqr from "../../img/planetbeeqr.png"


const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={aboutme} alt="" className="aboutImg" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
    Hello, I'm Sema İnal. I graduated in International Relations and have been working in web design and notebook design for the past three years. My interest in the world of design excites me as it combines both my creativity and technical skills.
</p>

<p className="about-desc">
     My education in International Relations has honed my analytical and problem-solving skills, which I apply to web design, creating user-friendly and visually appealing websites.

Over the past three years, I have enhanced the digital presence of various clients through web design and custom notebook creations for personal and corporate use.

I specialize in modern and functional websites using HTML, CSS, JavaScript, and other web design tools, and I create custom notebooks to boost brand value.

I communicate effectively with clients to ensure timely project completion and satisfaction.

Thank you for visiting my website. If you'd like to discuss how I can assist with your projects, please contact me.
</p>
                <div className="about-link">
                    <img src={planetbee} alt="" className="about-linkImg"/>
                    <img src={planetbeeqr} alt="" className="about-linkImg"/>
                    
                </div>
            </div>
        </div>

    )
}

export default About
