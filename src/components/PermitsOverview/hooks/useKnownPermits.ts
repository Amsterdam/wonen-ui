import Permit from "../Permit"

export default (permits: Permit[] ) => {
  const knownPermits = permits.filter(({ permit_granted }) => permit_granted !== "UNKNOWN")
  if (knownPermits === undefined || knownPermits.length === 0) return undefined
  return knownPermits
}
