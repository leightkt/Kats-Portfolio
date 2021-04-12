import './Home.css'
import coverPhoto from '../assets/cover.jpg'

function Home () {

    return (
        <div>
            <section>
                <p>Hi.</p>
                <p>I'm Kat.</p>
            </section>
            <img className="cover-photo" src={coverPhoto} alt="a human queer human in a floral shirt and brown hat with fall mountains in the background" />
        </div>
    )
}

export default Home