import { Request, Response } from "express"

const bcrypt = require('bcryptjs')
// const process = require('process')
const path = require('path')
const util = require('util')
const fs = require('fs')

const { userModel } = require('../../Models/index')
const { signJWT } = require('../../Utils/jwt')
const { now } = require('../../Utils/date_time')

const existDir = util.promisify(fs.exists)
const mkdir = util.promisify(fs.mkdir)
const writeFile = util.promisify(fs.writeFile)

async function login(req, res) {
    try {
        const { username, password } = req.body
        const user = await userModel.findOne({ username })
        if(!user) {
            return res.status(400).json({
                result: [],
                message: 'not found user'
            })
        }
        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.json({
                result: [],
                message: 'wrong password'
            })
        } 
        const option = {}
        const jwt = signJWT({username, id: user.id}, option)
        return res.json({
            message: 'success',
            result: {
                jwt
            },
        })
    } catch(err) {
        if(err) {
            console.log('errors', err)
            res.status(500)
            .json({
                message: 'errors'
            })
        }
    }
}

interface File {
    name: string;
    path: string;
}

async function register(req: Request, res: Response) {
    try {
        const { username, password, email } = req.body
        const user = await userModel.findOne({ username })
        if (user) return res.json({
            message: 'found user'
        })
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
        const avatar = file.name ? file.name : null
        bcrypt.genSalt(10, (err, salt) => {
            if (err) res.status(500).json({ message: 'errors' })
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) res.status(500).json({ message: 'errors' })
                const newUser = new userModel({
                    username,
                    password: hash,
                    email,
                    avatar
                })
                const user = await newUser.save()
                res.json({
                    result: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        avatar: user.avatar
                    },
                    message: 'success'
                })
            })
        })

    } catch(err) {
        console.log('ERROS \n', err)
        res.status(500)
        .json({
            message: 'errors'
        })
    }
}

module.exports = {
    login,
    register
}