export default function IconForOther({ size = 40 }) {
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
      <circle cx="21" cy="21" r="4" fill="#2b2f36" />
      <path d="M12 35c2-4 5.5-6.5 9-6.5" fill="none" stroke="#2b2f36" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="30" cy="19" r="3.2" fill="#2b2f36" opacity="0.7" />
      <path d="M24.5 32c1.8-3.2 4.8-5 7.5-5" fill="none" stroke="#2b2f36" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <circle cx="31" cy="24" r="6" fill={`url(#${id})`} />
      <rect x="28" y="23.3" width="6" height="1.4" rx="0.7" fill="#fff" />
      <rect x="30.3" y="21" width="1.4" height="6" rx="0.7" fill="#fff" />
    </svg>
  )
}