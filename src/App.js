import './App.css';
import coverPhoto from './assets/cover.jpg'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <img className="cover-photo" src={coverPhoto} alt="a human queer human in a floral shirt and brown hat with fall mountains in the background" />
    </div>
  );
}

export default App;
