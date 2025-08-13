export default function SelectCard({
  name,
  value,
  checked,
  onChange,
  title,
  description,
  icon,
}) {
  return (
    <label className="card-option">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="sr-only"
      />

      <div className="card-body">
        <div className="card-header">
          <div className="icon-wrap">{icon}</div>
          <span className="check-indicator" aria-hidden="true" />
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </label>
  )
}