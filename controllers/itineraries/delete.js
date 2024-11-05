import Itinerary from "../../models/Itinerary.js";

const eliminate = async (req, res, next) => {
    try {
        const deleteItinerary = await Itinerary.findByIdAndDelete(req.body._id);

        if (deleteItinerary) {
            return res.status(200).json({
                response: deleteItinerary,
            });
        } else {
           
            next(error);
        }
    } catch (error) {
        next(error);
    }
};

export { eliminate };
