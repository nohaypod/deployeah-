import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHome = () => {
  return (
    <header className="bg-red-500 p-2">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold"><Link to={'/'}>A E P C</Link></div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-300"></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderHome