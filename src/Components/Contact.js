import './Contact.css'
import hangOut from '../assets/hang.jpg'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import linkedIn from '../assets/linkedIn.png'


function Contact () {
    return(
        <section className="contact-container">
            <h2>LET'S HANG OUT</h2>
            <a href="mailto:leightkt@gmail.com"><img className="contact-icon" src={gmail} alt="gmail logo" /></a>
            <a href="https://github.com/leightkt"><img className="contact-icon github" src={github} alt="github logo" /></a>
            <a href="https://www.linkedin.com/in/kat-leight/"><img className="contact-icon linkedIn" src={linkedIn} alt="linkedIn logo" /></a>
            <img className="hang-out" src={ hangOut } alt="looking down on climber repelling from a mountain with a view 1000s of feet to the valley below" />
        </section>
    )
}

export default Contact