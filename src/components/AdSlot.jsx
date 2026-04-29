import { useEffect, useRef } from 'react'
import { adsConfig, canRenderAds } from '../config/ads'

const ADSENSE_SCRIPT_ID = 'adsense-script'

let adsensePromise

function loadAdsenseScript(client) {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.adsbygoogle) {
    return Promise.resolve()
  }

  if (adsensePromise) {
    return adsensePromise
  }

  adsensePromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(ADSENSE_SCRIPT_ID)

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener('error', () => reject(new Error('adsense-load-failed')), { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = ADSENSE_SCRIPT_ID
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('adsense-load-failed'))
    document.head.appendChild(script)
  })

  return adsensePromise
}

export default function AdSlot({ slot, className = '', label = '贊助廣告', minHeight = 128 }) {
  const slotRef = useRef(null)
  const isConfigured = canRenderAds(slot)

  useEffect(() => {
    if (!isConfigured || !slotRef.current) {
      return undefined
    }

    let isCancelled = false

    loadAdsenseScript(adsConfig.adsenseClient)
      .then(() => {
        if (isCancelled || !slotRef.current) {
          return
        }

        try {
          window.adsbygoogle = window.adsbygoogle || []
          window.adsbygoogle.push({})
          slotRef.current.dataset.adLoaded = 'true'
        } catch {
          slotRef.current.dataset.adLoaded = 'error'
        }
      })
      .catch(() => {
        if (slotRef.current) {
          slotRef.current.dataset.adLoaded = 'error'
        }
      })

    return () => {
      isCancelled = true
    }
  }, [isConfigured, slot])

  if (!isConfigured && !adsConfig.debug) {
    return null
  }

  return (
    <aside className={`ad-shell ${className}`.trim()} aria-label={label}>
      <p className="ad-label">{label}</p>
      <div className="ad-frame" style={{ minHeight: `${minHeight}px` }}>
        {isConfigured ? (
          <ins
            ref={slotRef}
            className="adsbygoogle ad-slot"
            style={{ display: 'block', minHeight: `${minHeight}px` }}
            data-ad-client={adsConfig.adsenseClient}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <div className="ad-placeholder">
            這裡預留廣告版位。填入 AdSense 參數後才會正式顯示。
          </div>
        )}
      </div>
      <p className="ad-note">建議只放在內容段落之間或頁尾上方，不要插進輸入區與主要結果卡。</p>
    </aside>
  )
}