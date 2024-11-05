import City from "../../models/City.js";

let allCities = async (req, res, next) => {
        try {
            let { name } = req.query;
            let query = {};
    
            if (name) {
                query.name = { $regex: '^' + name + '.*', $options: 'i' };
            }
    
            let all = await City.find(query); // Usamos el query que incluye la búsqueda
            return res.status(200).json({
                response: all,
            });
        } catch (error) {
            next(error);
        }
    };
    

let cityById = async  (req, res, next)=> {

        try {
             
                let cityQuery = req.params.id
                let all = await City.findById(cityQuery)
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                next(error)
        }
}

export {allCities, cityById}