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
     My education in International Relations helped me develop analytical thinking and problem-solving skills. I apply these skills in technical fields such as web design, creating user-friendly and aesthetically pleasing websites.

    Over the past three years, I have participated in various projects and strengthened the digital presence of many clients. In addition to web design, I also create custom notebook designs, providing creative solutions for personal and corporate needs.

    
     I design modern and functional websites using HTML, CSS, JavaScript, and various web design tools.
     I create custom and corporate notebook designs to help my clients enhance their brand value.
    I communicate effectively with my clients to complete projects on time and meet their expectations.

    Thank you for visiting my website. If you would like to discuss how I can assist you with your projects, please feel free to contact me.
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
