import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation'
import About from './Components/About'
import ProjectsContainer from './Containers/ProjectsContainer'
import ResumeContainer from './Containers/ResumeContainer'
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
