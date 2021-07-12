export const appendTimeToDate = (date: string) => {
  if (date === "") return ""
  return `${ date }T12:00:00+0200`
}
