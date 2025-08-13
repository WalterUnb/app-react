import React, { useMemo } from 'react'
import { usePlans } from '../hooks/usePlans'
import PlanCard from '../components/PlanCard'
import '../styles/plans.sass'

export default function PlansGrid() {
  const { data: plans, loading, error } = usePlans()

  const maxPrice = useMemo(() => {
    if (!plans?.length) return null
    return Math.max(...plans.map(p => p.price))
  }, [plans])

  if (loading) return <div className="plans-loading">Cargando planes…</div>
  if (error) return <div className="plans-error">Ocurrió un error: {error.message}</div>

  return (
    <section className="plans-grid">
      {plans.map((p, idx) => (
        <PlanCard
          key={idx}
          name={p.name}
          price={p.price}
          description={p.description}
          recommended={p.price === maxPrice}
          onSelect={() => alert(`Seleccionaste: ${p.name}`)}
        />
      ))}
    </section>
  )
}