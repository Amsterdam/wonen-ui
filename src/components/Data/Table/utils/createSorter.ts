import { ValueNodes, DataIndex } from "../Table"
import { Sorter } from "./sorters"
import { getValue } from "./getValue"
import indexValueNode from "./indexValueNode"

export default (index: DataIndex, sorter: Sorter) =>
  (as: ValueNodes, bs: ValueNodes) => {
    const a = indexValueNode(as, index)
    const b = indexValueNode(bs, index)
    const aValue = getValue(a)
    const bValue = getValue(b)
    if (bValue == null) return 1
    if (aValue == null) return -1
    return sorter(aValue, bValue)
  }
