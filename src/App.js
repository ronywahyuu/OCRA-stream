import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Video from './pages/Video';
import History from './pages/History';
import Register from './pages/Register';
import axios from 'axios';
import LoginModal from './components/auth/LoginModal';
import Login from './pages/Login';
import Tes from './components/Tes';
import UserChannel from './pages/UserChannel';

function App() {
  const [iconColor, setIconColor] = useState('white');
  const [isLogin, setIsLogin] = useState(true);


  const handleRegister = (fullName, email, password, confirmPassword) => {
    // console.log(fullName, email, password, confirmPassword)
    try {
      const res = () => {
        console.log(fullName, email, password)
        axios.post('https://e378-202-93-229-42.ap.ngrok.io/api/v1/register', {
          fullName: fullName,
          email: email,
          password: password
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      res();
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogin = (email, password) => {
    try {
      console.log(email, password)
      const res = () => {
        axios.post('/auth/signin', { name: email, password: password }, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        })
          .then(function (response) {
            console.log(response.headers);
            // return window.location('/logins')
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      res();

    } catch (err) {
    }
  }

  return (
    <BrowserRouter>
      <main className="flex" >
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar
            iconColor={iconColor}
            isLogin={isLogin} />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/video1" element={<Video />} />
              <Route path="/feed/history" element={<History />} />
              <Route path="/auth/login" element={<Login handleLogin={handleLogin} />} />
              <Route path="/auth/register" element={<Register handleRegister={handleRegister} />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
                <Route path="c/:channelName" element={<UserChannel />} />
              </Route>
              <Route path="video/channel1" element={<UserChannel />} />

            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
