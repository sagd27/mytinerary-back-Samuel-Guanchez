import { Router } from "express";
import {captureToken, signin} from "../controllers/auth/signin.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import schemaValidateSignIn from "../schemas/auth/signIn.js";
import validator from "../middlewares/validator.js";
import signout from "../controllers/auth/signout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import signinGoogle from "../controllers/auth/signinGoogle.js";


const routerAuth = Router()

routerAuth.post('/signIn',validator(schemaValidateSignIn) ,accountNoExist,isValidPassword,generateToken, signin)
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signout)
routerAuth.get('/token',passport.authenticate('jwt', { session: false}), captureToken)

routerAuth.get(
        '/signIn/google',
        passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
    )
    routerAuth.get(
        '/signInGoogle/callback',
        passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
        generateToken,
        signinGoogle
    )


export default routerAuth