import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation () {

    return (
        <nav>
            <Link to="home">HOME</Link>
            <Link to="about">ABOUT</Link>
            <Link to="projects">PROJECTS</Link>
            <Link to="resume">RESUME</Link>
            <Link to="contact">CONTACT</Link>
        </nav>
    )
}

export default Navigation