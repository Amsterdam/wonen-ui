import PermitType from "../PermitType"

export default (permits: PermitType[] ) => {
  const permitsWithResults = permits.filter(({ resultaat }) => !!resultaat )
  if (permitsWithResults === undefined || permitsWithResults.length === 0) return undefined
  return permitsWithResults
}
