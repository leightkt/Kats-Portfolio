import './Project.css'
import PourTaste from '../assets/PourTaste.png'
import Voice2Vibes from '../assets/Voice2Vibes.png'
import BelayChain from '../assets/BelayChain.png'
import Portfolio from '../assets/portfolio.png'
import ReactPlayer from 'react-player'

function Project ({ projectData, setProject, singleDisplay, setSingleDisplay }) {

    const handleClick = () => {
        setProject( projectData )
        setSingleDisplay( !singleDisplay )
    }

    return (
        <div className="project-card" onClick={ handleClick }>
            <h3>{ projectData.name }</h3>
            {   singleDisplay 
                ?   <>
                        { projectData.demo 
                            ? <ReactPlayer url={ projectData.demo } />
                            : <img className="project-image-larger" src={ projectData.image } alt={ `${projectData.name} screenshot` }/>
                        }
                        <p>Tech Used: { projectData.tech }</p>
                        <a className="project-link" href={ projectData.github }>Github Repo</a>
                        { projectData.link ? <a className="project-link" href={projectData.demo}>App Link</a> : null }
                        <p className="description">{ projectData.description }</p>
                    </>
                :  <img className="project-image" src={ projectData.image } alt={ `${projectData.name} screenshot` }/>
            }
        </div>
    )
}

export default Project