export default (valid: boolean, component: string, message: string): void => {
  if (valid) {
    console.warn(`[wonen-ui: ${ component }] ${ message }`)
  }
}