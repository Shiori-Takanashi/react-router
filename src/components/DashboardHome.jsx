// src/components/DashboardHome.jsx
import { FaRocket, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';
import DashboardHero from './common/DashboardHero';

export default function DashboardHome() {
  const stats = [
    {
      icon: FaUsers,
      label: 'Total Users',
      value: '1,234',
      color: 'bg-blue-500',
    },
    {
      icon: FaChartLine,
      label: 'Revenue',
      value: '¥456,789',
      color: 'bg-green-500',
    },
    { icon: FaRocket, label: 'Projects', value: '89', color: 'bg-purple-500' },
    { icon: FaCog, label: 'Tasks', value: '156', color: 'bg-orange-500' },
  ];

  return (
    <div className='w-full min-h-full'>
      <div className='space-y-6'>
        {/* 共通 Hero Section */}
        <DashboardHero
          title='Welcome to Your Dashboard'
          subtitle='ここでは主要な統計データやクイックアクションにアクセスできます。'
          gradient='from-blue-600 to-purple-600'
        >
          <button
            onClick={() => alert('Button clicked!')}
            className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-md'
          >
            Get Started
          </button>
        </DashboardHero>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'
              >
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-600 text-sm font-medium'>
                      {stat.label}
                    </p>
                    <p className='text-2xl font-bold text-gray-900 mt-1'>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <IconComponent className='text-white text-xl' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Quick Actions
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <button className='p-4 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200'>
              <h4 className='font-medium text-gray-900'>Create New Report</h4>
              <p className='text-gray-600 text-sm mt-1'>
                Generate a new analytics report
              </p>
            </button>
            <button className='p-4 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200'>
              <h4 className='font-medium text-gray-900'>Manage Users</h4>
              <p className='text-gray-600 text-sm mt-1'>
                Add or edit user accounts
              </p>
            </button>
            <button className='p-4 border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200'>
              <h4 className='font-medium text-gray-900'>View Analytics</h4>
              <p className='text-gray-600 text-sm mt-1'>
                Check detailed performance metrics
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
