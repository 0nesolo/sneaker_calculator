// npm
var Joi = require('joi');

/**
 * Joi schema inputs
 * @type {Object}
 */
module.exports.inputs = Joi.object().keys({

  sneakerName: Joi.string().required(),
  sneakerCost: Joi.number().min(50).required(),

  sneakersQuantityForFree: Joi.number().min(1).max(50).required(),
  sneakersQuantityForResale: Joi.number().min(1).max(50).required(),

  associates: Joi.alternatives().try(Joi.boolean(), Joi.object().keys({
    associatesQuantity: Joi.number().min(1).max(50),
    associatesPayPerHour: Joi.number(),
    associatesHours: Joi.number()
  }))

});

/**
 * Joi schema calculated
 * @type {Object}
 */
module.exports.calculated = Joi.object().keys({
  sneakersQuantity: Joi.number().integer().min(1).max(50).required(),
  sneakersCost: Joi.number().min(50).required(),
  sneakersCostForFree: Joi.number().min(50).required(),
  sneakersCostForResale: Joi.number().min(50).required(),

  totalCost: Joi.number().min(50).required(),
  sneakersResaleAverage: Joi.number().min(50).required(),

  associates: Joi.alternatives().try(Joi.boolean(), Joi.object().keys({
    associatesCost: Joi.number().min(50).required(),
    associatesTotalHours: Joi.number()
  }))

});