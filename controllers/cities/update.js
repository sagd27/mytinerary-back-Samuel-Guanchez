import City from "../../models/City.js"

const update = async (req, res, next) => {
        try {

          const updatedCity = await City.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true } 
          );
      
          if (updatedCity) {
            return res.status(200).json({
              response: updatedCity,
            });
          } else {
            next(error)
    
          }
        } catch (error) {
          next(error);
        }
      };
      


      
export { update };
