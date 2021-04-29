import { useEffect, useState } from 'react'

function useElementOnScreen(
  elementRef,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  },
) {
  const [entry, setEntry] = useState()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]) => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current 
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, threshold, root, rootMargin, frozen])

  return entry
}

export default useElementOnScreen

// // TO USE
// const boxRef = useRef<any | null>(null);
// const entry = useElementOnScreen(boxRef, {
//   root: document.querySelector('.scrolling-wrapper'),
//   rootMargin: "0px -200px",
//   threshold: 0.9
// });
// const isVisible = !!entry?.isIntersecting;