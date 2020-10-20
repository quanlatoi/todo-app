import { Request, Response } from 'express';
const util = require('util')
const fs = require('fs')
const path = require('path')

const { userModel } = require('../../Models')
const { now } = require('../../Utils/date_time')

const existDir = util.promisify(fs.exists)
const mkdir = util.promisify(fs.mkdir)
const writeFile = util.promisify(fs.writeFile)

async function getDetail(req: Request, res: Response) {
    const { username, email, avatar } = res.locals
    res.json({
        result: {
            username,
            email,
            avatar
        },
        message: 'success'
    })
}

interface File {
    name: string;
    path: string;
}

async function updateUser(req: Request, res: Response) {
    try {
        const { username } = res.locals
        const { newUsername, newEmail } = req.body
        const cwd = path.resolve(process.cwd(), 'Public')
        let file: File = {
            name: '',
            path: '',
        }
        if (req.file) {
            const originalNameSplit = req.file.originalname.split('.')
            const isExistDir = await existDir(path.resolve(cwd, 'image'))
            if (!isExistDir) {
                await mkdir(path.resolve(cwd, 'image'), { recursive: true })
            }
            file.name = originalNameSplit[0] + `_${now().format('YYYY-MM-DD HH:mm:ss')}`
            for (let i = 0; i < originalNameSplit.length; i++) {
                file.name += `.${originalNameSplit[i]}`
            }
            file.path = path.resolve(cwd, 'image')
            await writeFile(path.resolve(file.path, file.name), req.file.buffer)
        }
        const newAvatar = file.name ? file.name : ''
        const newUser = userModel.findOneAndUpdate(username, {
            username: newUsername,
            email: newEmail,
            avatar: newAvatar
        })
        return res.json({
            result: {
                user: newUser
            },
            message: 'success'
        })
    } catch(err) {
        if(err) {
            console.log('ERRORS \n', err)
            return res.status(500).json({
                message: 'errors'
            })
        }
    }
}

module.exports = {
    getDetail,
    updateUser
}