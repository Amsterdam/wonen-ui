const regex = /(((https?:\/\/))[^,\s]+)/g
const replace = (match: string) => `<a href="${ match }" rel="noopener noreferrer">${ match }</a>`

export default (text: string) => text.replace(regex, replace)
