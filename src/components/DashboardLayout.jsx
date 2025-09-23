// src/components/DashboardLayout.jsx
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='min-h-screen bg-gray-200 flex flex-col'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 overflow-auto'>
          <div className='max-w-7xl mx-auto p-6'>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
