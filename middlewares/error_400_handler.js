const error_400_handler = (error,req, res, next) =>{
        console.log( "ERRO 400"+ error);
        
        if (error.status===400) {
                return res.status(400).json({
                        success: false,
                        response: error,
                        message: `error`
                })
                
        }

       next(error)
}

export  default error_400_handler