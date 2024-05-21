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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at architecto distinctio, earum id blanditiis quo quibusdam vel quae eligendi, cumque tempore minima expedita, et temporibus dolorum.
                </p>

                <p className="about-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at ipsam ab, magnam atque illo iure laudantium facere inventore, dolore, veniam maxime quaerat! Numquam corporis recusandae molestias modi explicabo ex, sapiente eius saepe quae incidunt dicta quam suscipit, at est cupiditate quis laudantium itaque illum expedita iure. Velit, sed consectetur!
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