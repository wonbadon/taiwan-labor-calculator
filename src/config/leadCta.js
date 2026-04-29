const isEnabled = String(import.meta.env.VITE_LEAD_CTA_ENABLED || 'false').toLowerCase() === 'true'
const isDebug = String(import.meta.env.VITE_LEAD_CTA_DEBUG || 'false').toLowerCase() === 'true'

export const leadCtaConfig = {
  enabled: isEnabled,
  debug: isDebug,
  title: import.meta.env.VITE_LEAD_CTA_TITLE || '需要進一步人工協助？',
  body: import.meta.env.VITE_LEAD_CTA_BODY || '如果你的情境已經超出一般試算範圍，可以把問題整理後導向合作諮詢、表單蒐集或外部服務。',
  primaryLabel: import.meta.env.VITE_LEAD_CTA_PRIMARY_LABEL || '前往合作諮詢',
  primaryUrl: import.meta.env.VITE_LEAD_CTA_PRIMARY_URL || '',
  secondaryLabel: import.meta.env.VITE_LEAD_CTA_SECONDARY_LABEL || '下載進階資源',
  secondaryUrl: import.meta.env.VITE_LEAD_CTA_SECONDARY_URL || '',
}

export function canRenderLeadCta() {
  return Boolean(
    leadCtaConfig.enabled &&
    leadCtaConfig.primaryUrl &&
    leadCtaConfig.primaryLabel,
  )
}