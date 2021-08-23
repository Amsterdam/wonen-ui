import { useEffect, useMemo, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

/**
 * Returns dimensions of the given node.
 * Updates dimensions whenever the node changes its dimensions.
 *
 * Example usage:
 * ```
 * const Foo:FC = () => {
 *   const { ref, node } = useNodeByReference()
 *   const dimensions = useNodeDimensions(node)
 *
 *   console.log(dimensions)
 *
 *   return <div ref={ref}></div>
 * }
 *
 * ```
 *
 *
 */
const useNodeDimensions = (node?: Element) => {
  const [ dimensions, setDimensions ] = useState<DOMRectReadOnly>()

  const resizeObserver = useMemo(() => new ResizeObserver((entries: any) => {
    setDimensions(entries[0].contentRect as DOMRectReadOnly)
  }), [ setDimensions ])

  useEffect(() => {
    if (node) {
      resizeObserver.observe(node)
    }

    return () => {
      if (node) {
        resizeObserver.unobserve(node)
      }
    }
  }, [node, resizeObserver])

  return dimensions
}

export default useNodeDimensions
