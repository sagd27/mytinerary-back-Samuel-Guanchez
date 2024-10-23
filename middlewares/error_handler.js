const error_handler = (error,req, res, next) =>{
        console.log("ERROR 500"+ error.status);
        
        return res.status(500).json({
                success: false,
                response: error,
                message: `error`
        })
     
}

export  default error_handler