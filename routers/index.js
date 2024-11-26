import { Router } from "express";
import cityRouter from "./cities.js";
import itineraryRouter from "./itineraries.js";
import routerAuth from "./auth.js";
import usersRouter from "./users.js";

const router = Router();

router.use('/cities', cityRouter) 
router.use('/itineraries', itineraryRouter)   
router.use('/auth', routerAuth)
router.use('/users', usersRouter)

export default router   
