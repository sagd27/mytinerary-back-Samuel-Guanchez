import mongoose from "mongoose";

 let url = process.env.URI_MONGO

 console.log(url);
 
async function conectionDB(){
        try {
             await  mongoose.connect(process.env.URI_MONGO)
                console.log("Conectado a la Base de datos");
                
        } catch (error) {
               console.log(error);
                
        }
}

conectionDB()