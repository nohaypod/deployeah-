import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import QrLector from './pages/QrLector.jsx';
import Exito from './pages/Exito.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PrivateRoute from './PrivateRoute.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/exito' element={<Exito />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
        <Route path='/qrlector' element={<PrivateRoute element={<QrLector />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App