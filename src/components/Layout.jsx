import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: '首頁' },
  { to: '/overtime', label: '加班費' },
  { to: '/annual-leave', label: '特休天數' },
  { to: '/severance', label: '資遣費' },
  { to: '/labor-pension', label: '勞退試算' },
]

const disclaimerPoints = [
  '本站內容依公開法規、主管機關說明與站內試算假設整理，僅供你先判讀方向。',
  '實際權益仍會受薪資結構、班表制度、周年制或曆年制、契約約定與個案事實影響。',
  '遇到資遣、工時爭議、補償金或罰則問題，請再向勞工局、勞動部或專業律師確認。',
]

const referencePoints = [
  '加班與假日出勤：依勞基法第24條、第39條及主管機關公開說明整理。',
  '特休天數：依在職年資門檻試算，未處理企業內部曆年制折算。',
  '勞退試算：採站內級距表與固定年化報酬假設，不代表個人實際投資成果。',
]

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute left-[8%] top-[18rem] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[6%] top-[10rem] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="brand-mark" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-300/75">法規試算站</p>
              <p className="text-sm font-semibold text-white sm:text-base">台灣勞工權益計算器</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={pathname === to ? 'nav-link nav-link-active' : 'nav-link'}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="開關選單"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-slate-950/95 px-4 py-3 md:hidden">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`mb-1 block rounded-2xl px-4 py-3 text-sm font-semibold ${
                  pathname === to
                    ? 'border border-sky-300/20 bg-sky-400/10 text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="relative mx-auto flex-1 w-full max-w-6xl px-4 py-8 sm:px-6 md:py-10">
        {children}
      </main>

      <footer className="relative mt-16 border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6">
          <div className="section-card">
            <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
              <div>
                <p className="page-eyebrow">重要免責聲明</p>
                <h2 className="mt-4 text-2xl font-extrabold text-white md:text-3xl">
                  這是公開資訊整理與試算工具，不取代正式法律意見。
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  我把常見勞工權益場景拆成可快速計算的頁面，目的是幫你先確認方向、預估落點與整理提問重點。
                  如果你的情況涉及非自願離職爭議、調職、獎金是否列入平均工資、工時制度特殊排班或公司自訂特休制度，請務必再做人工確認。
                </p>
              </div>

              <div className="space-y-3">
                <div className="metric-tile">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/75">使用邊界</p>
                  <ul className="site-list mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {disclaimerPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="metric-tile">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">站內試算基準</p>
                  <ul className="site-list mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {referencePoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} 台灣勞工權益計算器</p>
            <p>建議在正式申訴、協商或簽署文件前，再向主管機關或專業人士覆核。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
