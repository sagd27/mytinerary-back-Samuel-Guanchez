import { Router } from "express";
import allUser  from "../controllers/users/read.js";
import create from "../controllers/users/create.js";
import deleteOne from "../controllers/users/delete.js";
import { update } from "../controllers/users/update.js"
import validator from "../middlewares/validator.js";
import createHash from "../middlewares/createHash.js";
import accountExist from "../middlewares/accountExist.js";
import passport from "../middlewares/passport.js";
import schemaCreateUser from "../schemas/user/create.js"
import schemaUpdateUser from "../schemas/user/update.js"
const usersRouter = Router()

usersRouter.get('/all',passport.authenticate('jwt',{session: false}), allUser)
usersRouter.post('/create',validator(schemaCreateUser),accountExist,createHash,create)
usersRouter.put('/update',passport.authenticate('jwt',{session: false}),validator(schemaUpdateUser),update)
usersRouter.delete('/delete',passport.authenticate('jwt',{session: false}),deleteOne)


export default usersRouter