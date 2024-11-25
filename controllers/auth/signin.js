import User from "../../models/User.js";

let signin =  async (req, res, next) => {
 
        try {
 
                await User.findOneAndUpdate(
                        {email: req.body.email},
                        {online: true}

                )
                
                
                return res.status(200).json({
                        success: true,
                        message: "signed in",
                        user:{
                                email: req.user.email,
                                role: req.user.role,
                              

                        },
                        token: req.token
                })

        } catch (error) {
                next(error)
                
        }

}
export default signin;