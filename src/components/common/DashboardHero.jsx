// src/components/common/DashboardHero.jsx
import PropTypes from 'prop-types';

/**
 * Hero セクション（ダッシュボード共通のヘッダー）
 *
 * @param {string} title - セクションタイトル
 * @param {string} subtitle - 説明文
 * @param {string} gradient - 背景グラデーション（例: "from-blue-600 to-purple-600"）
 * @param {React.ReactNode} children - 任意でボタンや追加要素を差し込める
 */
export default function DashboardHero({ title, subtitle, gradient, children }) {
  return (
    <div
      className={`w-[960px] mx-auto bg-gradient-to-r ${gradient} text-white p-8 rounded-lg shadow-lg mb-6`}
    >
      {/* タイトル */}
      <h2 className='text-3xl font-bold mb-4'>{title}</h2>

      {/* サブタイトル */}
      <p className='text-white/80 text-lg mb-6'>{subtitle}</p>

      {/* 任意の追加要素（例: ボタン群） */}
      {children && <div className='mt-4'>{children}</div>}
    </div>
  );
}

DashboardHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  children: PropTypes.node,
};

DashboardHero.defaultProps = {
  gradient: 'from-blue-600 to-purple-600', // デフォルトカラー
  children: null,
};
