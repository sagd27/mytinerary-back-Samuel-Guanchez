import { response } from "express";
import City from "../../models/City.js";

let allCities = async (req, res) => {
        try {
                let all = await City.find();
                return res.status(200).json({
                        response: all,
                });
        } catch (error) {
                return res.status(500).json({
                        response: error,
                });     
        }
};

let cityById = async  (req, res)=> {

        try {
             
                let cityQuery = req.params.id
                let all = await City.findById(cityQuery)
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                return res.status(500).json({
                        response: error
                })
        }
}

export {allCities, cityById}