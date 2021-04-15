import './Contact.css'
import hangOut from '../assets/hang.jpg'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import linkedIn from '../assets/linkedIn.png'
import medium from '../assets/medium.png'


function Contact () {
    return(
        <section className="contact-container">
            <h2>LET'S HANG OUT</h2>
            <div className="icon-div">
                <a className="icon-link" href="mailto:leightkt@gmail.com"><img className="contact-icon gmail" src={gmail} alt="gmail logo" /></a>
                <a className="icon-link" href="https://github.com/leightkt"><img className="contact-icon github" src={github} alt="github logo" /></a>
                <a className="icon-link" href="https://www.linkedin.com/in/kat-leight/"><img className="contact-icon linkedIn" src={linkedIn} alt="linkedIn logo" /></a>
                <a className="icon-link" href="https://kat-leight.medium.com/"><img className="contact-icon medium" src={medium} alt="medium icon"/></a>
            </div>
            <img className="hang-out hide-on-small" src={ hangOut } alt="looking down on climber repelling from a mountain with a view 1000s of feet to the valley below" />
        </section>
    )
}

export default Contact