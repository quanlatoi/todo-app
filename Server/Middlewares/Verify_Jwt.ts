import { Response, Request, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
const { usePassport } = require('../Utils/jwt')
const { userModel } = require('../Models');

usePassport()

module.exports.verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: String = req.authInfo.id
        const userData: MongooseDocument = await userModel.findOne({ _id: id}).select('-password')
        if (userData) {
            res.locals = userData
            return next();
        } else {
            return res.status(401).json({
                message: 'unauthorized'
            })
        }
    } catch(err) {
        if(err) {
            console.log('ERRORS \n', err)
            return res.status(500).json({
                message: 'errors'
            })
        }
    }
}