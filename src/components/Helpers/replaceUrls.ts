export default (message: string)  => {
  const urlRegex = /(((https?:\/\/))[^,\s]+)/g
  return message.replace(urlRegex, url => `<a href="${ url }" target="_blank" rel="noopener noreferrer">${ url }</a>`)
}
