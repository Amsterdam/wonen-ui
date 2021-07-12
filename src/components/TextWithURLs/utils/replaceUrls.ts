const regex = /(((https?:\/\/))[^,\s]+)/g
const replace = (match: string) => `<a href="${ match }" target="_blank" rel="noopener noreferrer">${ match }</a>`

export default (text: string) => text.replace(regex, replace)
