const formatDate = ISODate => {
    if (!ISODate) return null
    const rawDate = new Date(ISODate)
    const stringDateTime = rawDate.toLocaleString()
    const [stringDate, stringTime] = stringDateTime.split(', ')
    const [mm, dd, yyyy] = stringDate.split('/')
    return `${mm}/${dd}/${yyyy} ${stringTime}`
}

module.exports = {
    formatDate
} 