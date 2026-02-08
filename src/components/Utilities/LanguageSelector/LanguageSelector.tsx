import React from 'react'
import { Select, Tooltip } from 'antd'
import { useTranslation } from 'react-i18next'

const { Option } = Select

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  const languageLabels: Record<string, string> = {
    en: 'English',
    fr: 'Français'
  }

  return (
    <Tooltip title="Select Language">
      <Select
        value={i18n.language}
        onChange={handleChange}
        style={{ width: 120 }}
      >
        {Object.entries(languageLabels).map(([code, label]) => (
          <Option key={code} value={code}>
            {label}
          </Option>
        ))}
      </Select>
    </Tooltip>
  )
}

export default LanguageSelector
