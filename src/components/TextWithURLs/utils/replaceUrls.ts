const regex = /(((https?:\/\/))[^,\s]+)/g
const replace = (match: string) => `<a href="${ match }">${ match }</a>`

export default (text: string) => text.replace(regex, replace)
