/**
 * Introduction view
 * @type {String}
 */
module.exports.introduction = `
 "When you have nothing remember anything is possible.
 Priorities only show you whats possible.

 You should start consulting yourself during
 conversation."

                                            - 0nesolo

`;

/**
 * Errors view
 * @type {String}
 */
module.exports.errors = `
 {{#each details}}
  {{{ message }}}
 {{/each}}
`;

/**
 * Sneakers view
 * @type {Object}
 */
module.exports.sneakers = `
 Sneakers for free cost {{ calculatedInputs.sneakersCostForFree }} ({{ userInputs.sneakersQuantityForFree }})
 Sneakers for resale cost \${{ calculatedInputs.sneakersCostForResale }} ({{ userInputs.sneakersQuantityForResale }})
 Sneakers total cost \${{ calculatedInputs.sneakersCost }} ({{ calculatedInputs.sneakersQuantity }})
`;

/**
 * No associates view
 * @type {Object}
 */
module.exports.noAssociates = `
 You must have a connect. If you don't need anyone to
 wait on line for you.
`;

/**
 * Associates view
 * @type {Object}
 */
module.exports.associates = `
 Associates hired ({{ userInputs.associates.associatesQuantity }})
 At \${{ userInputs.associates.associatesPayPerHour }} a hour.
 Anticipating ({{ userInputs.associates.associatesHours }}) hours waited on line.
 Associates total cost is \${{ calculatedInputs.associates.associatesCost }}
`;

/**
 * Associates view
 * @type {Object}
 */
module.exports.totalCost = `
 Let's look at total cost. \${{ calculatedInputs.totalCost }}
`;

/**
 * Average view
 * @type {Object}
 */
module.exports.average = `
 Sneakers for resale ({{ userInputs.sneakersQuantityForResale }}) need to sale for
 an average of \${{ calculatedInputs.sneakersResaleAverage }} in order to receieve
 your ({{ userInputs.sneakersQuantityForFree }}) {{ userInputs.sneakerName }} for free.
`;