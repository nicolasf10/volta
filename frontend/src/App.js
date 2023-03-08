import logo from './images/logo1.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyTrips from './pages/myTrips';
import Explore from './pages/Explore';
import Trip from './pages/Trip/Trip';
import BucketList from './pages/BucketList';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/trips" element={<MyTrips/>}/>
            <Route exact path="/trip" element={<Trip/>}/>
            <Route exact path="/bucketlist" element={<BucketList/>}/>
            <Route exact path="/explore" element={<Explore/>}/>
            <Route exact path="/login" element={<LoginPage status="login"/>}/>
            <Route exact path="/signup" element={<LoginPage status="signup"/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        </div>
      </Router>
  );
}

export default App;
