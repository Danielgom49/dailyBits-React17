import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Admin from '../containers/Admin';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Profile from '../containers/Profile';
import Question from '../containers/Question';
import Question2 from '../containers/Question2';
import Question3 from '../containers/Question3';
import Register from '../containers/Register';
import Statistics from '../containers/Statistics';
import LoginAdmin from '../containers/LoginAdmin';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/administrador" element={<LoginAdmin />} />
          <Route path="/question" element={<Question />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
