import { Select } from '@/components/Antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  const languageLabels: Record<string, string> = {
    en: 'English',
    fr: 'Français'
  }

  const options = Object.entries(languageLabels).map(([value, label]) => ({
    value,
    label
  }))

  return (
    <Select value={i18n.language} onChange={handleChange} options={options} />
  )
}

export default LanguageSelector
