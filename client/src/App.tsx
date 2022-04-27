import './style/style.css';
import Header from './Components/Header/Header';
import Profil from './Components/Profil/Profil';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import RedProfil from './Components/RedProfil/RedProfil';
import Message from './Components/Messages/Message';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/Profile" element={<Profil />} />
          <Route path="/RedProfile" element={<RedProfil />} />
          <Route path="/Messages" element={<Message />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>


    </div>
  );
}

export default App;
