import joi from "joi-oid";

const schema = joi.object({
  _id: joi.objectId().required().messages({
    "objectId.base": "debe pertenecer al id de un usuario valido",
  }),

  name: joi.string().messages({
    "string.base": "el nombre es requerido",
  }),
  lastName: joi.string().messages({
    "string.base": "el apellido es requerido",
  }),
  email: joi.string().email().messages({
    "string.base": "verifique que el email es correcto",
    "string.email": "debe ser el formato de un email",
  }),
  password: joi.string().min(7).messages({
    "string.base": "verifique que la clave es correcta",
    "string.min": "su clave debe ser minimo de 8 caracteres",
  }),
  photo: joi.string().messages({
    "string.base": "url de la foto es requerida",
  }),

  country: joi.string().messages({
    "string.base": "pais de origen es requerido",
  }),
 
});

export default schema;
