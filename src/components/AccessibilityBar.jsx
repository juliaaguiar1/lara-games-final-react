import { useEffect, useState } from 'react'

export default function AccessibilityBar() {
  const [contrast, setContrast] = useState(() => localStorage.getItem('lara-contrast') === 'true')
  const [largeFont, setLargeFont] = useState(() => localStorage.getItem('lara-large-font') === 'true')

  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrast)
    localStorage.setItem('lara-contrast', contrast)
  }, [contrast])

  useEffect(() => {
    document.body.classList.toggle('large-font', largeFont)
    localStorage.setItem('lara-large-font', largeFont)
  }, [largeFont])

  return (
    <section className="accessibility-bar" aria-label="Preferências de acessibilidade">
      <label>
        <input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} />
        Alto contraste
      </label>
      <label>
        <input type="checkbox" checked={largeFont} onChange={(e) => setLargeFont(e.target.checked)} />
        Fonte ampliada
      </label>
    </section>
  )
}
