import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileBanner from './components/ProfileBanner';
import Skillsection from './components/Skillsection';
import Contact from './components/Contact';
import { Link } from 'react-scroll';


function App() {
  return (
    <div className="App GeeksForGeeks" id='top'>
      <Navigation />
      <ProfileBanner/>
      <Skillsection />
      <Contact/>
    </div>
  );
}

export default App;
