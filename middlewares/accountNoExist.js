import User from "../models/User.js";

export default async(req,res,next) => {

        try {
                
                let account = await User.findOne({email: req.body.email})
                if (account){
                        req.user={
                                email: account.email,
                                password: account.password,
                                role: account.role,
                                phone: account.phone
                        }
                        return next()

                }
                return res.status(400).json({
                        succes: false,
                        message: "User does not exist"
                });


        } catch (error) {
                next(error);
        }

}