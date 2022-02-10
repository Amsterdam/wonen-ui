// LINK: https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript

export default (d: string, d1: string) => {

  const date = new Date(d)
  const date1 = new Date(d1)
  const millisecondsPerDay = 24 * 60 * 60 * 1000
  return Math.floor((date1.getTime() - date.getTime()) / millisecondsPerDay)
}