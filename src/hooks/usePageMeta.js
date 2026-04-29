import { useEffect } from 'react'

const SITE_NAME = '台灣勞工權益計算器'
const DEFAULT_DESCRIPTION = '整理台灣常見勞工權益情境，提供加班費、特休、資遣費與勞退等前端試算工具與使用指南。'

export default function usePageMeta(pageTitle, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const previousTitle = document.title
    const title = pageTitle ? `${pageTitle}｜${SITE_NAME}` : SITE_NAME

    document.title = title

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    const previousDescription = metaDescription.getAttribute('content') || ''
    metaDescription.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      metaDescription.setAttribute('content', previousDescription)
    }
  }, [pageTitle, description])
}