export function animationDurationPlugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      'animation-duration': (value) => ({
        animationDuration: value
      }),
    },
    { values: theme('transitionDuration') }
  )
}
