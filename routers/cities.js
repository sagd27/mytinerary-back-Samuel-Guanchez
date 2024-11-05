import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import create from "../controllers/cities/create.js";
import { update } from "../controllers/cities/update.js";
import { eliminate } from "../controllers/cities/delete.js";


const router =  Router();


router.get('/all', allCities);

router.get('/cityById/:id', cityById);

router.post('/create', create)

router.put('/update', update)

router.delete('/delete', eliminate)





export default router