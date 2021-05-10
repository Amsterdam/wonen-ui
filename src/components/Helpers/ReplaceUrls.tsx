
const ReplaceURLs = (message: string)  => {
    if(!message) return
   
    const urlRegex = /(((https?:\/\/)|(www\.))[^,\s]+)/g

    return message.replace(urlRegex, function (url) {
      var hyperlink = url
      return `<a href="${ hyperlink }" target="_blank" rel="noopener noreferrer">${ url }</a>`
    })
  }

  export default ReplaceURLs
