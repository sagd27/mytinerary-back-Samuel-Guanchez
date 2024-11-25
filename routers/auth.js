import { Router } from "express";
import singin from "../controllers/auth/singin.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import schemaValidateSignIn from "../schemas/auth/signIn.js";
import validator from "../middlewares/validator.js";
import signout from "../controllers/auth/signout.js";
import passport from "../middlewares/passport.js";


const routerAuth = Router()

routerAuth.post('/signIn',validator(schemaValidateSignIn) ,accountNoExist,isValidPassword,generateToken, singin)
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signout)


export default routerAuth