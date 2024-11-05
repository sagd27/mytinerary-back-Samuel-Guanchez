import City from "../../models/City.js";

const eliminate = async (req, res, next) => {
        try {
                console.log("la respuesta es"+req.body._id);
                
            const deleteCity = await City.findByIdAndDelete(req.body._id);
    
            if (deleteCity) {
                return res.status(200).json({
                    response: deleteCity,
                });
            } else {
               
                next(error);
            }
        } catch (error) {
            next(error);
        }
    };

    export {eliminate}