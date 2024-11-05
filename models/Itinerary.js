import { Schema, model } from "mongoose";
import "../models/City.js"

let collection = 'itinerary'

let schema = new Schema({
        name: {type: String, required: true},
        photo : {type: String, required: true},
        duration: {type: Number, required: true},
        Likes: {type: Number, required: true},
        Hashtags: {type: Array, required: true},
        price:{type: Number, required: true},
        city:{type: Schema.Types.ObjectId,ref: 'cities' , required: true},
        comments: {type: String, required: true}

},{
        timestamps: true,
       
       })

let Itinerary = model (collection, schema)

export default Itinerary
