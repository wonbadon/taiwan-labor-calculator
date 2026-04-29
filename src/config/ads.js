const isEnabled = String(import.meta.env.VITE_ADS_ENABLED || 'false').toLowerCase() === 'true'
const isDebug = String(import.meta.env.VITE_ADS_DEBUG || 'false').toLowerCase() === 'true'

export const adsConfig = {
  enabled: isEnabled,
  debug: isDebug,
  provider: import.meta.env.VITE_ADS_PROVIDER || 'adsense',
  adsenseClient: import.meta.env.VITE_ADSENSE_CLIENT || '',
  slots: {
    home: import.meta.env.VITE_ADSENSE_HOME_SLOT || '',
    page: import.meta.env.VITE_ADSENSE_PAGE_SLOT || '',
  },
}

export function canRenderAds(slot) {
  return Boolean(
    adsConfig.enabled &&
    adsConfig.provider === 'adsense' &&
    adsConfig.adsenseClient &&
    slot,
  )
}