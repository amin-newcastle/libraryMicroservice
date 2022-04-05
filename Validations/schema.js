const Joi = require('joi')

const schema = Joi.object({
    ISBN: Joi.number().min(13).required(),
    Title: Joi.string().required(),
    Author: Joi.string().required()
});

module.exports = schema;