import './style/style.css';
import Header from './Components/Header/Header';
import Profil from './Components/Profil/Profil';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import RedProfil from './Components/RedProfil/RedProfil';
import Message from './Components/Messages/Message';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Correspondence from './Components/Сorrespondence/Сorrespondence';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='body'>
        <Routes>
          <Route path="/Profile" element={<Profil />} />
          <Route path="/RedProfile" element={<RedProfil />} />
          <Route path="/Messages" element={<Message />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Correspondence" element={<Correspondence />} />
        </Routes>
      </main>


    </div>
  );
}

export default App;
