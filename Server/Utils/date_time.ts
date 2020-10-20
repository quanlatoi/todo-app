const moment = require('moment')

const now = () => moment()
const today = () => moment().startOf('day')
const yesterday = () => today().subtract(1, 'days')
const lastWeek = () => thisWeek().subtract(1, 'weeks')
const lastMonth = () => thisMonth().subtract(1, 'month')
const tomorrow = () => today().add(1, 'days')
const thisWeek = () => moment().startOf('isoWeek')
const nextWeek = () => thisWeek().add(1, 'weeks')
const thisMonth = () => moment().startOf('month')
const nextMonth = () => thisMonth().add(1, 'month')

module.exports = {
    now, today, yesterday, tomorrow,
    lastWeek, thisWeek, nextWeek,
    lastMonth, thisMonth, nextMonth
}