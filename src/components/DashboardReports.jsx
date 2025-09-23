// src/components/DashboardReports.jsx
import { useState } from 'react';
import {
  FaSearch,
  FaEye,
  FaClock,
  FaCheck,
  FaSpinner,
  FaTimes,
} from 'react-icons/fa';

// サンプルレポートデータ
const sampleReports = [
  {
    id: 1,
    title: 'Report 1',
    description: 'Description of Report 1',
    date: '2025-09-23',
    status: 'Completed',
    details: 'Details for Report 1',
  },
  {
    id: 2,
    title: 'Report 2',
    description: 'Description of Report 2',
    date: '2025-09-22',
    status: 'Pending',
    details: 'Details for Report 2',
  },
  {
    id: 3,
    title: 'Report 3',
    description: 'Description of Report 3',
    date: '2025-09-21',
    status: 'In Progress',
    details: 'Details for Report 3',
  },
  {
    id: 4,
    title: 'Report 4',
    description: 'Description of Report 4',
    date: '2025-09-20',
    status: 'Completed',
    details: 'Details for Report 4',
  },
];

export default function DashboardReports() {
  const [reports, setReports] = useState(sampleReports);
  const [filter, setFilter] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  // フィルタリング処理
  const filteredReports = reports.filter(
    report =>
      report.status.toLowerCase().includes(filter.toLowerCase()) ||
      report.title.toLowerCase().includes(filter.toLowerCase())
  );

  // 詳細情報の表示
  const handleViewDetails = report => {
    setSelectedReport(report);
  };

  // ステータスを更新
  const handleStatusChange = (reportId, newStatus) => {
    const updatedReports = reports.map(report =>
      report.id === reportId ? { ...report, status: newStatus } : report
    );
    setReports(updatedReports);
  };

  // ステータスに応じたアイコンと色を取得
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
    <div className='space-y-6'>
      {/* Header */}
      <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Reports</h2>

        {/* Search Filter */}
        <div className='relative'>
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search reports by title or status...'
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200'
          />
        </div>
      </div>

      {/* Reports Grid */}
      <div className='grid gap-6'>
        {filteredReports.map(report => {
          const statusInfo = getStatusIcon(report.status);
          const StatusIcon = statusInfo.icon;

          return (
            <div
              key={report.id}
              className='bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {report.title}
                  </h3>
                  <p className='text-gray-600 mb-3'>{report.description}</p>
                  <p className='text-sm text-gray-500'>
                    <strong>Date:</strong> {report.date}
                  </p>
                </div>

                <div
                  className={`flex items-center px-3 py-1 rounded-full ${statusInfo.color}`}
                >
                  <StatusIcon className='mr-2 text-sm' />
                  <span className='text-sm font-medium'>{report.status}</span>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <button
                  onClick={() => handleViewDetails(report)}
                  className='flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200'
                >
                  <FaEye className='mr-2' />
                  View Details
                </button>

                {/* Status Update Buttons */}
                {report.status === 'Pending' && (
                  <button
                    onClick={() => handleStatusChange(report.id, 'In Progress')}
                    className='flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200'
                  >
                    <FaSpinner className='mr-2' />
                    Start Progress
                  </button>
                )}
                {report.status === 'In Progress' && (
                  <button
                    onClick={() => handleStatusChange(report.id, 'Completed')}
                    className='flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200'
                  >
                    <FaCheck className='mr-2' />
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredReports.length === 0 && (
        <div className='bg-white p-12 rounded-lg shadow-md border border-gray-200 text-center'>
          <div className='text-gray-400 mb-4'>
            <FaSearch className='mx-auto text-4xl' />
          </div>
          <h3 className='text-lg font-medium text-gray-900 mb-2'>
            No reports found
          </h3>
          <p className='text-gray-600'>Try adjusting your search criteria</p>
        </div>
      )}

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
                  <div className='flex items-center'>
                    {(() => {
                      const statusInfo = getStatusIcon(selectedReport.status);
                      const StatusIcon = statusInfo.icon;
                      return (
                        <div
                          className={`flex items-center px-3 py-1 rounded-full ${statusInfo.color}`}
                        >
                          <StatusIcon className='mr-2 text-sm' />
                          <span className='text-sm font-medium'>
                            {selectedReport.status}
                          </span>
                        </div>
                      );
                    })()}
                  </div>
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
  );
}
