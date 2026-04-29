import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const principles = [
  '本站是公開法規資訊整理與前端試算工具，不是勞動部、地方勞工局或任何官方網站。',
  '本站的角色是先幫你把問題縮小、抓到方向與大致數字，不是替代個案法律判斷。',
  '當你要進入正式申訴、協商、離職簽署、調解或訴訟時，仍應回到原始資料、公司制度與主管機關說明再次覆核。',
]

const sources = [
  '勞動基準法與勞工退休金條例等公開法規文字。',
  '主管機關公開說明、常見問答與工資 / 勞退級距資料。',
  '站內目前已整理的 2026 年基本工資與勞退提繳級距版本。',
]

const boundaries = [
  '輪班津貼、獎金、補助、變動薪資是否計入平均工資。',
  '變形工時、排班爭議、曆年制折算與特殊企業內規。',
  '自請離職、特殊終止、契約爭議與訴訟中的個案事實判斷。',
  '需要保存個資、存證、正式通知或政府認證的服務流程。',
]

const nextSteps = [
  { to: '/guide', label: '新手指南', desc: '先看使用順序與輸入前要檢查什麼。' },
  { to: '/scenarios', label: '情境比較', desc: '先判斷你遇到的是哪一種勞動情境。' },
  { to: '/faq', label: '常見問題', desc: '先看最常出現的疑問與錯誤口徑。' },
]

export default function About() {
  usePageMeta(
    '關於本站',
    '說明台灣勞工權益計算器的資料來源、更新邊界、站點角色與不涵蓋的複雜情況。',
  )

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="space-y-3">
        <p className="page-eyebrow">關於本站</p>
        <h1 className="page-title">這個站在做什麼，也沒有在做什麼</h1>
        <p className="page-subtitle max-w-3xl">
          我把台灣常見勞工權益問題整理成可立即使用的前端試算工具，目的不是替你作官方認定，而是先幫你把問題分類、把大方向與落點抓出來。
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <div className="section-card">
          <p className="page-eyebrow">站點定位</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-950">這是一個公開資訊整理站，不是官方窗口</h2>
          <ul className="site-list mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section-card">
          <p className="page-eyebrow">資料來源</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-950">目前內容主要依這些公開資料整理</h2>
          <ul className="site-list mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {sources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card">
        <p className="page-eyebrow">目前邊界</p>
        <h2 className="mt-3 text-2xl font-extrabold text-slate-950">以下這些情況，不應只靠本站結果直接下判斷</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {boundaries.map((item) => (
            <div key={item} className="metric-tile h-full text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="page-eyebrow">接著去哪</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">如果你還在找入口，先從這幾頁開始</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            這幾頁會把本站怎麼使用、哪種情境該進哪個工具，以及哪些口徑最常出錯，先整理給你看。
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {nextSteps.map(({ to, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="metric-tile block h-full transition duration-200 hover:-translate-y-1 hover:bg-sky-50"
            >
              <h3 className="text-xl font-extrabold text-slate-950">{label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}