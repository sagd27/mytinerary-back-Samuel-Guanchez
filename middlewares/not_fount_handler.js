const not_fount_handler = (req, res, next) =>{
        return res.status(404).json({
                success: false,
                message: `la peticion con el metodo ${req.method} en la ruta ${req.url}-Not Fount`
        })
}

export  default not_fount_handler