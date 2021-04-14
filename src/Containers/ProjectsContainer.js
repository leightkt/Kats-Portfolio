import './ProjectsContainer.css'

const projects = [
    {
        name: "This Portfolio Site",
        description: "React single page app to display my projects, resume, and contact information",
        github: "https://github.com/leightkt/Kats-Portfolio",
        demo: "",
        link: "",
        tech: "React, React Router"
    },
    {
        name: "BelayChain",
        description: "Full stack app for rock climbing gym to save belay certifications on a blockchain, and user to view and validate certifications.",
        github: "https://github.com/leightkt/belay-chain-blockchain",
        demo: "https://www.youtube.com/watch?v=lMzP-tAFLZk",
        link: "",
        tech: "React, React Router, Redux, MongoDB, Node, Express, Bcrypt, JWT, Ruby on Rails, postgresQL, and Crypto-js"

    },
    {
        name: "Voice2Vibes",
        description: "Full stack app that allows a user to login interact via voice command with a bluetooth device called the Moxie",
        github: "https://github.com/leightkt/voice2vibes-frontend",
        demo: "https://www.youtube.com/watch?v=wLTmVcyDfi8&t=2s",
        link: "https://voice2vibes.web.app/",
        tech: "React, React Router, Web Speech API, Web Bluetooth API, Node, Express, Knex, Bcrypt, JWT, postgresQL"

    },
    {
        name: "Pour Taste",
        description: "Full stack app for users to login and host or join a blind wine tasting party, rate wines, view and search completed tastings.",
        github: "https://github.com/leightkt/pour-taste-backend",
        demo: "https://www.youtube.com/watch?v=9kxwHwgc114&t=209s",
        link: "https://pour-taste.web.app/",
        tech: "Ruby on Rails, JWT, Bcrypt, postgresQL, ActiveRecord, Javascript, HTML, and CSS"

    }
]
function ProjectsContainer () {
    return(
        <section>
            <h2>Projects HERE</h2>
        </section>
    )
}

export default ProjectsContainer