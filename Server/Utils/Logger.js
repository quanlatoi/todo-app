const { join } = require('path')
const winston = require('winston')

const { formatDate } = require('./Other')
const Log = require('../Models/Logs')

const config = {
    path: './logs'
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            name: 'error',
            level: 'error',
            filename: join(config.path, 'error.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false
        }),
    ],
    exitOnError: false
});

const api = {
    error: ( message, toJson = true) => {
        const data = toJson ? JSON.stringify(message) : message
        logger.error(`[WS] ${formatDate(Date.now())} ${data}`)
    },
    info: ({
        method,
        path,
        info,
        by,
        oldStatus,
        newStatus
    }) => Log.create({
        time: formatDate(Date.now()),
        path: `${method} ${path}`,
        by,
        oldStatus,
        newStatus,
        info
    }),
}

module.exports = {
    api
}
