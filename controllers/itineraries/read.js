import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js"   


let allItinrary = async (req, res, next) => {
        try {
            let { name } = req.query;
            let query = {};
    
            if (name) {
                query.name = { $regex: '^' + name + '.*', $options: 'i' };
            }
    
            let all = await Itinerary.find(query).populate('city', '').exec(); 
            return res.status(200).json({
                response: all,
            });
        } catch (error) {
            next(error);
        }
    };
    

let itineraryById = async  (req, res, next)=> {

        try {
             
                let itineraryQuery = req.params.id
                let all = await Itinerary.findById(itineraryQuery)
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                next(error)
        }
}

let itineraryByCity = async  (req, res, next)=> {

        try {
             console.log("esto responde"+ req.params.id);
             
                let itineraryQuery = req.params.id
                let all = await Itinerary.find({city: itineraryQuery}).populate('city', '').exec()
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                next(error)
        }
}

export {allItinrary, itineraryById, itineraryByCity}