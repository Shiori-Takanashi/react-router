// src/components/DashboardReports.jsx
import { useState, useEffect } from 'react';
import {
  FaSearch,
  FaEye,
  FaClock,
  FaCheck,
  FaSpinner,
  FaTimes,
} from 'react-icons/fa';
import DashboardHero from './common/DashboardHero';

export default function DashboardReports() {
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  // JSON データ読み込み
  useEffect(() => {
    fetch('/data/reports.json')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // 検索フィルタ
  const filteredReports = reports.filter(
    report =>
      report.status.toLowerCase().includes(filter.toLowerCase()) ||
      report.title.toLowerCase().includes(filter.toLowerCase())
  );

  // 詳細表示
  const handleViewDetails = report => setSelectedReport(report);

  // ステータス変更
  const handleStatusChange = (reportId, newStatus) => {
    const updatedReports = reports.map(report =>
      report.id === reportId ? { ...report, status: newStatus } : report
    );
    setReports(updatedReports);
  };

  // ステータスごとのアイコンと色
  const getStatusIcon = status => {
    switch (status) {
      case 'Completed':
        return { icon: FaCheck, color: 'text-green-600 bg-green-100' };
      case 'In Progress':
        return { icon: FaSpinner, color: 'text-blue-600 bg-blue-100' };
      case 'Pending':
        return { icon: FaClock, color: 'text-yellow-600 bg-yellow-100' };
      default:
        return { icon: FaClock, color: 'text-gray-600 bg-gray-100' };
    }
  };

  return (
    <div className='w-full min-h-full'>
      <div className='space-y-6'>
        {/* Hero Section */}
        <DashboardHero
          title='Reports Dashboard'
          subtitle='レポートの検索・フィルタリング・ステータス更新を効率的に行えます。'
          gradient='from-blue-600 to-purple-600'
        >
          {/* Search Filter */}
          <div className='relative'>
            <FaSearch className='absolute left-75 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className='pl-20 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900'
            />
          </div>
        </DashboardHero>

        {/* Stats Overview */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>
                  Total Reports
                </p>
                <p className='text-2xl font-bold text-gray-900 mt-1'>
                  {reports.length}
                </p>
              </div>
              <div className='bg-blue-500 p-3 rounded-full'>
                <FaSearch className='text-white text-xl' />
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>Completed</p>
                <p className='text-2xl font-bold text-gray-900 mt-1'>
                  {reports.filter(r => r.status === 'Completed').length}
                </p>
              </div>
              <div className='bg-green-500 p-3 rounded-full'>
                <FaCheck className='text-white text-xl' />
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>In Progress</p>
                <p className='text-2xl font-bold text-gray-900 mt-1'>
                  {reports.filter(r => r.status === 'In Progress').length}
                </p>
              </div>
              <div className='bg-blue-500 p-3 rounded-full'>
                <FaSpinner className='text-white text-xl' />
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>Pending</p>
                <p className='text-2xl font-bold text-gray-900 mt-1'>
                  {reports.filter(r => r.status === 'Pending').length}
                </p>
              </div>
              <div className='bg-yellow-500 p-3 rounded-full'>
                <FaClock className='text-white text-xl' />
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Recent Reports
          </h3>

          {filteredReports.length === 0 ? (
            <div className='text-center py-12'>
              <FaSearch className='mx-auto text-4xl text-gray-400 mb-4' />
              <h4 className='text-lg font-medium text-gray-900 mb-2'>
                No reports found
              </h4>
              <p className='text-gray-600'>
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {filteredReports.map(report => {
                const statusInfo = getStatusIcon(report.status);
                const StatusIcon = statusInfo.icon;

                return (
                  <div
                    key={report.id}
                    className='p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'
                  >
                    <div className='flex items-start justify-between mb-3'>
                      <div className='flex-1'>
                        <h4 className='font-medium text-gray-900 mb-1'>
                          {report.title}
                        </h4>
                        <p className='text-gray-600 text-sm mb-2'>
                          {report.description}
                        </p>
                        <p className='text-xs text-gray-500'>
                          <strong>Date:</strong> {report.date}
                        </p>
                      </div>

                      <div
                        className={`flex items-center px-2 py-1 rounded-full text-xs ${statusInfo.color}`}
                      >
                        <StatusIcon className='mr-1' />
                        <span className='font-medium'>{report.status}</span>
                      </div>
                    </div>

                    <div className='flex items-center gap-2'>
                      {/* 詳細表示 */}
                      <button
                        onClick={() => handleViewDetails(report)}
                        className='flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-200'
                      >
                        <FaEye className='mr-1' /> View
                      </button>

                      {/* ステータス更新 */}
                      {report.status === 'Pending' && (
                        <button
                          onClick={() =>
                            handleStatusChange(report.id, 'In Progress')
                          }
                          className='flex items-center px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors duration-200'
                        >
                          <FaSpinner className='mr-1' /> Start
                        </button>
                      )}
                      {report.status === 'In Progress' && (
                        <button
                          onClick={() =>
                            handleStatusChange(report.id, 'Completed')
                          }
                          className='flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors duration-200'
                        >
                          <FaCheck className='mr-1' /> Complete
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Details Modal */}
        {selectedReport && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg shadow-xl max-w-lg w-full max-h-96 overflow-y-auto'>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Report Details
                  </h3>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className='text-gray-400 hover:text-gray-600 transition-colors duration-200'
                  >
                    <FaTimes className='text-xl' />
                  </button>
                </div>

                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Title
                    </label>
                    <p className='text-gray-900'>{selectedReport.title}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Status
                    </label>
                    <p className='text-gray-900'>{selectedReport.status}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Date
                    </label>
                    <p className='text-gray-900'>{selectedReport.date}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Details
                    </label>
                    <p className='text-gray-900'>{selectedReport.details}</p>
                  </div>
                </div>

                <div className='mt-6 flex justify-end'>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
