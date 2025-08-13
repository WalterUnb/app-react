import React from 'react'

export default function NumericInput({
  value,
  onChange,
  maxLength,
  className = 'form-control',
  placeholder,
  name,
  id,
  autoComplete = 'off',
  ...rest
}) {
  const sanitize = (v) => {
    const digits = (v ?? '').toString().replace(/\D/g, '')
    return typeof maxLength === 'number' ? digits.slice(0, maxLength) : digits
  }

  const handleChange = (e) => {
    const next = sanitize(e.target.value)
    onChange?.(next, e)
  }

  const handleKeyDown = (e) => {
    const ctrlCmd = e.ctrlKey || e.metaKey
    const allowed = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ]
    if (ctrlCmd || allowed.includes(e.key)) return
    if (!/^\d$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handlePaste = (e) => {
    const text = (e.clipboardData || window.clipboardData).getData('text')
    const next = sanitize(text)
    e.preventDefault()
    onChange?.(next)
  }

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      autoComplete={autoComplete}
      className={className}
      placeholder={placeholder}
      name={name}
      id={id}
      value={sanitize(value)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      {...rest}
    />
  )
}