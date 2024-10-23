import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import create from "../controllers/cities/create.js";


const router =  Router();


router.get('/all', allCities);

router.get('/cityById/:id', cityById);

router.post('/create', create)




export default router