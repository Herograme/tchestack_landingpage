/**
 * Scrolls the page to the top with a smooth animation
 * Can be used in route changes or other navigation events
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
