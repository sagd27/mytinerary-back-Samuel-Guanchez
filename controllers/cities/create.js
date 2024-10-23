import City from "../../models/City.js"

let create = async (req, res)=>{
        try {
                let city = req.body
                let all= await City.create(city)

                return res.status(201).json({
                        response: all
                })
        } catch (error) {
                return res.status(500).json({
                        response: error
                })
        }
}

export default create