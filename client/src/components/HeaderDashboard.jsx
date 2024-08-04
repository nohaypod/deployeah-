import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDashboard = () => {
  return (
    <header className="bg-red-500 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold"><Link to={'/'}>Evento 2024</Link></div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/dashboard" className="text-white hover:text-gray-300">Asistentes</Link>
            </li>
            <li>
              <Link to="/qrlector" className="text-white hover:text-gray-300">Escaner QR</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderDashboard;
