// src/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './components/DashboardHome';
import DashboardReports from './components/DashboardReports';
import DashboardProfile from './components/DashboardProfile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path='reports' element={<DashboardReports />} />
        <Route path='profile' element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
}
