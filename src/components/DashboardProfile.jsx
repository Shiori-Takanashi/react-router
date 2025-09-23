import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import DashboardHero from './common/DashboardHero';
import { selectRandomItem } from '../utils/select-random';

export default function DashboardProfile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch('/data/users.json')
      .then(r => r.json())
      .then(data => {
        try {
          setProfile(selectRandomItem(data));
        } catch {
          // デモ用途なので最低限: 失敗時は空オブジェクトのまま
        }
      })
      .catch(() => {
        // デモ用途: エラー無視
      });
  }, []);

  return (
    <div className='w-full min-h-full'>
      <div className='space-y-6'>
        {/* Hero Section */}
        <DashboardHero
          title='Manage Users'
          subtitle='管理者としてDashboardユーザのデータを操作'
          gradient='from-blue-600 to-purple-600'
        >
          <div className='relative pl-10'>
            <FaUser className='text-white/70 text-3xl' />
          </div>
        </DashboardHero>
      </div>

      <div className='mt-6 font-mono text-sm break-all'>
        {JSON.stringify(profile)}
      </div>
    </div>
  );
}
