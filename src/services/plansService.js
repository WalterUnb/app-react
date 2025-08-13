const API_URL = 'https://rimac-front-end-challenge.netlify.app/api/plans.json'

let cache = null

export async function fetchPlans({ signal } = {}) {
  if (cache) return cache

  const res = await fetch(API_URL, { signal, headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

  const data = await res.json()
  if (!data || !Array.isArray(data.list)) {
    throw new Error('Formato de respuesta inesperado: falta list[]')
  }

  cache = data.list
  return cache
}

export function clearPlansCache() {
  cache = null
}