export function animateDelayPlugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      'animate-delay': (value) => ({
        animationDelay: value
      }),
    },
    { values: theme('transitionDelay') }
  )
}
