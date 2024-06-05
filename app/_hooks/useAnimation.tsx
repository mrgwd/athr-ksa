import { useEffect } from 'react'

function useAnimation(
  elementRef: React.RefObject<HTMLDivElement>,
  height: number,
  ...classM: string[]
) {
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrollOffset = element.offsetTop - height
      const shouldRemoveClasses = window.scrollY > scrollOffset

      if (shouldRemoveClasses) {
        element.classList.remove(...classM)
      } else {
        element.classList.add(...classM)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [elementRef, height, classM])
}
export default useAnimation
