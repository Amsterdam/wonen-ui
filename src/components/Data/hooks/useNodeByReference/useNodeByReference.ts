import { useCallback, useState } from "react"

const defaultNodeModifier = <NODE extends HTMLElement>(node: NODE) => node
type NodeModifier<NODE> = (node: NODE) => HTMLElement | undefined

/**
 * Get node from reference.
 * Example:
 *
 * ```
 * const Foo:FC = () => {
 *   const { ref, node } = useNodeRef()
 *   console.log(node) // Div-node
 *
 *   return <div ref={ref}>...</div>
 * }
 * ```
 *
 * ```
 * const ParentNode:FC = () => {
 *   const { ref, node } = useNodeRef(() => node.parentNode)
 *   console.log(node) // The parent-node of this node.
 *
 *   return <div ref={ref}>...</div>
 * }
 * ```
 */
const useNodeByReference = <NODE extends HTMLElement>(modifier: NodeModifier<NODE> = defaultNodeModifier) => {
  const [ node, setNode ] = useState<HTMLElement | undefined>()
  const ref = useCallback((node: NODE) => setNode(modifier(node)), [ setNode, modifier ])
  return { ref, node }
}

export default useNodeByReference
