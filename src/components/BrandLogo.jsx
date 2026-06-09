export default function BrandLogo({ compact = false }) {
  return (
    <span className={compact ? 'brand brand-compact' : 'brand'} aria-label="Lara Games">
      <span className="brand-lara">LARA</span>
      <span className="brand-games">GAMES</span>
      <svg className="brand-curve" viewBox="0 0 180 24" aria-hidden="true" focusable="false">
        <path d="M5 14 C 35 2, 72 25, 105 13 S 158 9, 174 15" />
      </svg>
    </span>
  )
}
