import { ValueNode, ValueNodes, DataIndex } from "../Table"

export default <T extends DataIndex>(valueNodes: ValueNodes, dataIndex: T) => {
  if (Array.isArray(valueNodes) && typeof dataIndex === "number") return valueNodes[dataIndex]
  if (typeof dataIndex === "string") return (valueNodes as Record<string, ValueNode>)[dataIndex]
  return undefined
}

