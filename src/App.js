import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile';
import Setting from './components/Setting';
import Analytics from './components/Analytics';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/user/:id' element = {<UserProfile/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}>
          <Route path='profile' element = {<Profile/>}/>
          <Route path='setting' element = {<Setting/>}/>
          <Route path='analytics' element = {<Analytics/>}/>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
