import './Contact.css'
import hangOut from '../assets/hang.jpg'

function Contact () {
    return(
        <section className="contact-container">
            <h2>LET'S HANG OUT</h2>
            <img className="hang-out" src={ hangOut } alt="looking down on climber repelling from a mountain with a view 1000s of feet to the valley below" />
        </section>
    )
}

export default Contact