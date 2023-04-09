import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Tweet from './pages/component/Tweet';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/homepage/tweet' element={<Tweet />} />
          <Route path='/homepage/profile' element={<Profile/>} />
          <Route path='/homepage/userprofile' element={<UserProfile/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
