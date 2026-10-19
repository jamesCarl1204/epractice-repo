const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657l-.707-.707m12.728 12.728l-.707-.707m0-11.314l.707-.707m-12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
)

export const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

export const ChevronLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M15 19l-7-7 7-7" />
  </svg>
)

export const ChevronRightIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

export const StackIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

export const VerifiedIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.99 14.5l-3.5-3.5 1.41-1.41L10.01 13.67l5.59-5.59 1.41 1.41-7 7z" />
  </svg>
)
