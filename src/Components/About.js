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
                    <p>I'm also an amateur baker on a lifelong quest for the perfect cinnamon roll.</p>
                </div>
                <img className="cake" src={Cake} alt="top down view of a cake with frosting and sprinkles" />
                <div className="tech-skills">
                    <h2>Technical Skills</h2>
                    <ul>
                        <li>Full Stack Web Development</li>
                        <li>Blockchain</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>ActiveRecord</li>
                        <li>Javascript (ES6+)</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Redux</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>MongoDB</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Jest</li>
                        <li>SQL</li>
                        <li>Responsive Design</li>
                        <li>Web Accessibility</li>
                        <li>Project Management</li>
                    </ul>
                </div>
            </section>
            <img className="climbing" src={Climbing} alt="a climber on a crack climb" />
        </section>
    )
}

export default About