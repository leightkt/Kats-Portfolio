import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation'
import About from './Components/About'
import ProjectsContainer from './Containers/ProjectsContainer'
import ResumeContainer from './Containers/ResumeContainer'
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Navigation />
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/projects" render={() => <ProjectsContainer />} />
          <Route path="/resume" render={() => <ResumeContainer/>} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
