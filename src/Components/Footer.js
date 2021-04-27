import './Footer.css'
import computerCat from '../assets/computer-cat.png'

function Footer () {
    return (
        <footer>
            <h1><span className="cap">K</span>at In The Stack</h1>
            <a href="https://github.com/leightkt"><img className="compu-cat" src={computerCat} alt="a cat in a computer" /></a>
        </footer>
    )
}

export default Footer