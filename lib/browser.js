/**
 * Browser export
 * @param  {Object} userInputs
 * @param  {Function} finished
 */
module.exports = function ( userInputs, finished ) {

  /**
   * Sneakers quantity 
   * @type {Number}
   */
  const sneakersQuantity = ( userInputs.sneakersQuantityForFree + userInputs.sneakersQuantityForResale );

  /**
   * Sneakers cost 
   * @type {Number}
   */
  const sneakersCost = ( userInputs.sneakerCost * sneakersQuantity );

  /**
   * Check if we need calculations for associates 
   * @type {Number}
   */
  const calculateAssociates = ( userInputs.associates.associatesPayPerHour > 0 );

  /**
   * Associates
   * @type {Boolean}
   */
  var associates = false;

  // if associates exist
  if ( calculateAssociates ) {

    /**
     * Associates total hours
     * @type {Number}
     */
    var associatesTotalHours = ( userInputs.associates.associatesQuantity * userInputs.associates.associatesHours );

    /**
     * Associates cost
     * @type {Number}
     */
    var associatesCost = ( associatesTotalHours * userInputs.associates.associatesPayPerHour );

    /**
     * associates
     * @type {Object}
     */
    associates = {
      associatesCost: associatesCost,
      associatesTotalHours: associatesTotalHours
    };

  }

  /**
   * Sneakers cost for free
   * @type {Number}
   */
  const sneakersCostForFree = parseFloat( ( userInputs.sneakerCost * userInputs.sneakersQuantityForFree.toFixed(2) ) );

  /**
   * Sneakers cost for resale
   * @type {Number}
   */
  const sneakersCostForResale = parseFloat( ( userInputs.sneakerCost * userInputs.sneakersQuantityForResale.toFixed(2) ) );

  /**
   * Total cost
   * @type {Number}
   */
  const totalCost = parseFloat( ( ( associates.associatesCost || 0 ) + sneakersCost ).toFixed(2) );

  /**
   * Sneakers resale average
   * @type {Number}
   */
  const sneakersResaleAverage = parseFloat( ( totalCost / userInputs.sneakersQuantityForResale ).toFixed(2) );

  /**
   * Calculated inputs
   * @type {Object}
   */
  const calculatedInputs = {
    sneakersQuantity,
    sneakersCost,
    sneakersResaleAverage,
    sneakersCostForFree,
    sneakersCostForResale,
    associates,
    totalCost
  };

  // we done
  finished( false, calculatedInputs );

};