export default function IconForMe({ size = 40 }) {
  const id = `grad-${Math.random().toString(36).slice(2)}`
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff2fb0" />
          <stop offset="100%" stopColor="#7b61ff" />
        </linearGradient>
      </defs>
      <path d="M24 4l14 6v10c0 9.94-6.51 18.84-14 22-7.49-3.16-14-12.06-14-22V10l14-6z" fill="none" stroke="#2b2f36" strokeWidth="2"/>
      <circle cx="24" cy="20" r="5" fill={`url(#${id})`} />
      <path d="M14 36c2.5-5 7-8 10-8s7.5 3 10 8" fill="none" stroke="#2b2f36" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}