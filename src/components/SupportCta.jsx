import { canRenderLeadCta, leadCtaConfig } from '../config/leadCta'

function ExternalButton({ href, label, tone = 'primary' }) {
  if (!href || !label) {
    return null
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={tone === 'primary' ? 'btn-primary md:w-auto' : 'btn-secondary'}
    >
      {label}
    </a>
  )
}

export default function SupportCta({ className = '' }) {
  const isConfigured = canRenderLeadCta()

  if (!isConfigured && !leadCtaConfig.debug) {
    return null
  }

  return (
    <section className={`support-cta-shell ${className}`.trim()}>
      <div>
        <p className="support-cta-kicker">第二變現入口</p>
        <h2 className="support-cta-title mt-3">{leadCtaConfig.title}</h2>
        <p className="support-cta-body mt-3">{leadCtaConfig.body}</p>
      </div>

      <div className="support-cta-actions mt-5">
        {isConfigured ? (
          <>
            <ExternalButton href={leadCtaConfig.primaryUrl} label={leadCtaConfig.primaryLabel} tone="primary" />
            <ExternalButton href={leadCtaConfig.secondaryUrl} label={leadCtaConfig.secondaryLabel} tone="secondary" />
          </>
        ) : (
          <div className="support-cta-placeholder">
            這裡可放合作諮詢、法律服務導流、或進階模板下載入口。填入 CTA 變數後才會正式顯示。
          </div>
        )}
      </div>
    </section>
  )
}