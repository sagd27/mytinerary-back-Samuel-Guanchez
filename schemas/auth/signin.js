import joi from "joi-oid";

const schema = joi.object({
    email: joi.string().required().email().messages({
        'string.base': "es necesario que escriba el email",
        'string.email': "debe ser el formato de un email"
    }),
    password: joi.string().required().min(7).messages({
        'string.base': "la password es requerida",
        'string.min': "la password debe ser de mas de 7 caracteres"
    })

       
})

export default schema