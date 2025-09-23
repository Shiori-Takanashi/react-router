// src/components/DashboardLayout.jsx
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <header className='bg-white shadow-sm border-b border-gray-200 z-10'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
        </div>
      </header>

      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 overflow-auto'>
          <div className='max-w-7xl mx-auto p-6'>
            <Outlet />
          </div>
        </main>
      </div>

      <footer className='bg-white border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <p className='text-center text-gray-600 text-sm'>
            © 2025 Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
