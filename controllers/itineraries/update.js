import Itinerary from "../../models/Itinerary.js";



const update = async (req, res, next) => {
        try {

          const updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true } 
          );
      
          if (updatedItinerary) {
            return res.status(200).json({
              response: updatedItinerary,
            });
          } else {
            next(error)
    
          }
        } catch (error) {
          next(error);
        }
      };
      


      
export { update };
