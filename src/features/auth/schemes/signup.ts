import Joi, { ObjectSchema } from 'joi';

const signupSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Username must be of type string',
    'string.min': 'Invalid Username',
    'string.max': 'Invalid Username',
    'string.empty': 'Username is a required field'
  }),
  password: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Password must be of type string',
    'string.min': 'Invalid Password',
    'string.max': 'Invalid Password',
    'string.empty': 'Password is a required field'
  }),
  email: Joi.string().required().email().messages({
    'string.base': 'Email must be of type string',
    'string.email': 'Email must be valid',
    'string.empty': 'Email is a required field'
  }),
  avatarColor: Joi.string().required().messages({
    'any.required': 'Avator color is required'
  }),
  avatarImage: Joi.string().required().messages({
    'any.required': 'Avator image is required'
  })
});

export { signupSchema };
