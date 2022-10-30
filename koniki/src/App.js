import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileBanner from './components/ProfileBanner';
import Contentwrapper from './components/Contentwrapper';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProfileBanner/>
      <About/>
    </div>
  );
}

export default App;
