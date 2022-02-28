type Props = {
  entityName?: string
  personFunction?: string
}

const PersonEntityDisplay = ({ entityName, personFunction }: Props) => {
  const displayName = [personFunction, entityName].filter(x => !!x)
  return <>{displayName.join(", ")}</>
}
export default PersonEntityDisplay