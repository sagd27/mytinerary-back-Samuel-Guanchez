import joi from "joi-oid";

const schema = joi.object({
  name: joi.string().required().messages({
    "string.base": "el nombre es requerido",
  }),
  lastName: joi.string().required().messages({
    "string.base": "el apellido es requerido",
  }),
  email: joi.string().required().email().messages({
    "string.base": "verifique que el email es correcto",
    "string.email": "debe ser el formato de un email",
  }),
  password: joi.string().required().min(7).messages({
    "string.base": "verifique que la clave es correcta",
    "string.min": "su clave debe ser minimo de 8 caracteres",
  }),
  photo: joi.string().required().messages({
        "string.base": "url de la foto es requerida",
  }),

  country: joi.string().required().messages({
        "string.base": "pais de origen es requerido",
  }),
  online: joi.boolean().required(),
});

export default schema;
