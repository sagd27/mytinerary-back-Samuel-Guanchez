import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import bcryptjs from 'bcryptjs'

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        
        async (accessToken, refreshToken, profile, done) => {
        console.log("entro");
        
                try {
            
                let user = await User.findOne({ email: profile.emails[0].value })
                if (!user) {
                    let hashPassword = bcryptjs.hashSync(
                        profile.id,
                        10
                    )
                  
                    user = new User({
                        name: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        photo: profile.photos[0].value,
                        password: hashPassword,
                        country: 'colombia',
                        online: false,
                    })
                    await user.save()
                }

                return done(null, user)

            } catch (error) {
                return done(error, null)
            }
        }
    )
)