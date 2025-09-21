// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import DashboardReports from './pages/DashboardReports';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />             {/* /dashboard */}
                <Route path="reports" element={<DashboardReports />} /> {/* /dashboard/reports */}
            </Route>
        </Routes>
    );
}
