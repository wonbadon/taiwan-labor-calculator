import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta(
    '找不到頁面',
    '你造訪的頁面不存在，可以回到首頁重新選擇工具，或先閱讀新手指南。',
  )

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="section-card text-center">
        <p className="page-eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">這一頁不存在</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          你可能走到舊連結，或網址輸入錯了。可以先回首頁重新選工具，或先看新手指南確認要進哪一頁。
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary sm:w-auto">回首頁</Link>
          <Link to="/guide" className="btn-secondary">看新手指南</Link>
        </div>
      </section>
    </div>
  )
}