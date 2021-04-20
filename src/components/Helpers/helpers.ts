export const capitalizeString = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const appendTimeToDate = (date: string) => {
  if (date === "") return ""
  return `${ date }T12:00:00+0200`
}
