import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileBanner from './components/ProfileBanner';
import Contentwrapper from './components/Contentwrapper';
import About from './components/About';
import Skillsection from './components/Skillsection';
import { Element } from 'react-scroll'


function App() {
  return (
    <div className="App GeeksForGeeks">
      <Navigation />
      <ProfileBanner/>
      <Skillsection />
    </div>
  );
}

export default App;
