// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('/dashboard');

  const handleClick = path => {
    setActiveLink(path);
  };

  return (
    <aside className='w-64 bg-gray-800 text-white min-h-screen shadow-lg'>
      <div className='p-6'>
        <h2 className='text-xl font-bold text-center mb-8'>Navigation</h2>
        <nav>
          <ul className='space-y-2'>
            <li>
              <Link
                to='/dashboard'
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 ${
                  activeLink === '/dashboard'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300'
                }`}
                onClick={() => handleClick('/dashboard')}
              >
                <FaHome className='mr-3 text-lg' />
                <span className='font-medium'>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to='/dashboard/reports'
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-gray-700 ${
                  activeLink === '/dashboard/reports'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300'
                }`}
                onClick={() => handleClick('/dashboard/reports')}
              >
                <FaChartBar className='mr-3 text-lg' />
                <span className='font-medium'>Reports</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
