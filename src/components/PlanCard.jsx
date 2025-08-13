import React from 'react'

function formatCurrency(n) {
  const val = typeof n === 'number' ? n : Number(n || 0)
  return `S/ ${val.toFixed(2)}`
}

function discount(price, pct = 0.05) {
  return +(price * (1 - pct)).toFixed(2)
}

// Heurística simple para resaltar el inicio de la descripción.
// Corta en la primera coincidencia de las "marcas" comunes del dataset.
function emphasize(text) {
  const marks = [' para ', ' por ', ' al ', ' de manera ', ' en más de ', ' en caso ']
  const lower = text.toLowerCase()
  let cut = -1
  for (const m of marks) {
    const idx = lower.indexOf(m)
    if (idx !== -1) cut = cut === -1 ? idx : Math.min(cut, idx)
  }
  if (cut === -1) {
    // fallback: destaca las primeras 2-3 palabras
    const words = text.split(' ')
    const head = words.slice(0, Math.min(3, words.length)).join(' ')
    const tail = words.slice(Math.min(3, words.length)).join(' ')
    return (
      <>
        <strong>{head}</strong>{tail ? ' ' + tail : ''}
      </>
    )
  }
  const head = text.slice(0, cut)
  const tail = text.slice(cut)
  return (
    <>
      <strong>{head}</strong>{tail}
    </>
  )
}

export default function PlanCard({
  name,
  price,
  description = [],
  recommended = false,
  onSelect,
}) {
  const oldPrice = price
  const newPrice = discount(price, 0.05)

  return (
    <article className={`plan-card ${recommended ? 'is-recommended' : ''}`}>
      {recommended && (
        <div className="plan-badge">Plan recomendado</div>
      )}

      <header className="plan-header">
        <h3 className="plan-title">{name}</h3>
        <div className="plan-icon" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#ff2fb0" />
                <stop offset="100%" stopColor="#7b61ff" />
              </linearGradient>
            </defs>
            <path d="M6 22l18-12 18 12v16a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V22z" fill="none" stroke="#1d2a39" strokeWidth="2"/>
            <circle cx="35" cy="18" r="5" fill="url(#g1)" />
          </svg>
        </div>
      </header>

      <section className="plan-price">
        <div className="price-label">COSTO DEL PLAN</div>
        <div className="old-price">{formatCurrency(oldPrice)} antes</div>
        <div className="new-price">
          <span className="amount">{formatCurrency(newPrice)}</span>
          <span className="suffix"> al mes</span>
        </div>
        <hr className="divider" />
      </section>

      <ul className="plan-features">
        {description.map((d, i) => (
          <li key={i}>{emphasize(d)}</li>
        ))}
      </ul>

      <button className="btn-cta" onClick={onSelect}>
        Seleccionar Plan
      </button>
    </article>
  )
}