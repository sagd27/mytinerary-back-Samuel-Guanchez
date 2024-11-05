import { Router } from "express";
import { allItinrary, itineraryById, itineraryByCity } from "../controllers/itineraries/read.js";
import create from "../controllers/itineraries/create.js";
import { update } from "../controllers/itineraries/update.js";
import { eliminate } from "../controllers/itineraries/delete.js";


const router = Router()

router.get('/all', allItinrary)

router.get('/getById/:id', itineraryById)

router.get('/itineraryCity/:id',itineraryByCity)

router.post('/create', create)


router.put('/update', update)

router.delete('/delete', eliminate)


export default router