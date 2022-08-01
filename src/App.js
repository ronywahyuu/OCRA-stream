import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Video from './pages/Video';
import History from './pages/History';
import Register from './pages/Register';

function App() {
  const [iconColor, setIconColor] = useState('white');
  const [isLogin, setIsLogin] = useState(false);


  const handleRegister = () => {
    console.log('register');
  }

  return (
    <BrowserRouter>
      <main className="flex" >
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar 
            iconColor={iconColor} 
            isLogin={isLogin}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/1" element={<Video iconColor={iconColor} />} />
            <Route path="/feed/history" element={<History/>}/>
            <Route path="/register" element={<Register handleRegister={handleRegister}/>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
