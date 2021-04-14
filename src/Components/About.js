import './About.css'
import Climbing from '../assets/climbing.JPG'
import Cake from '../assets/cake.jpg'

function About () {

    return(
        <section className="about">
            <section className="about-text">
                <div className="deets">
                    <h2>ABOUT</h2>
                    <p>I'm Kat!</p>
                    <p>I'm a Full Stack Software Engineer out of Denver, CO.</p>
                    <p>I have a background in project management and Arabic Language study, and a passion for new challenges.</p>
                    <p>Away from my desk, I'm a full stack climber, mountaineer, and all around endurance athlete.</p>
                    <p>I thrive outside my comfort zone.</p>
                    <p>I'm also an amateur baker on a lifelong quest for the perfect cinnamon roll.</p>
                </div>
                <img className="cake" src={Cake} alt="top down view of a cake with frosting and sprinkles" />
                <div className="tech-skills">
                    <h2>Technical Skills</h2>
                    <p>
                        Full Stack Web Development, Ruby, Ruby on Rails, Javascript (ES6+), React, React Native, Redux, HTML5,
                        CSS, MongoDB, Node.js, Express, Blockchain, SQL, ActiveRecord, Jest, 
                        Responsive Design, Web Accessibility, Project Management 
                    </p>
                </div>
            </section>
            <img className="climbing" src={Climbing} alt="a climber on a crack climb" />
        </section>
    )
}

export default About