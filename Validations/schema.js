const Joi = require('joi')

const schema = Joi.object({
    ISBN: Joi.number().min(13).required(),
    title: Joi.string().required(),
    author: Joi.string().required()
});

module.exports = schema;