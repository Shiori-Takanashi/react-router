// DashboardLayout.jsx
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
    return (
        <div className="layout">
            <header>Header</header>
            <aside>Sidebar</aside>
            <main>
                {/* 子ルートがここに描画される */}
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
}
