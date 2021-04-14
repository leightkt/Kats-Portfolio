import './Project.css'
import PourTaste from '../assets/PourTaste.png'
import Voice2Vibes from '../assets/Voice2Vibes.png'
import BelayChain from '../assets/BelayChain.png'
import Portfolio from '../assets/portfolio.png'

function Project ({ projectData, setProject, singleDisplay, setSingleDisplay }) {

    const handleClick = () => {
        setProject( projectData )
        setSingleDisplay( !singleDisplay )
    }

    return (
        <div className="project-card" onClick={ handleClick }>
            <h3>{ projectData.name }</h3>
            <img className="project-image" src={ projectData.image } alt={ `${projectData.name} screenshot` }/>
            <p>{ projectData.description }</p>
        </div>
    )
}

export default Project