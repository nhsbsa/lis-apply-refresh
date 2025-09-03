module.exports = function (env) { /* eslint-disable-line no-unused-vars */
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  const filters = {};

  //
  // ALTER DATE BY NUMBER OF MONTHS FILTER
  //
  filters.alterTodaysDateByNumberOfMonths = function( monthOffset ){

    let today = new Date();
    var d = today.getDate();
    today.setMonth(today.getMonth() + monthOffset);
    if (today.getDate() !== d) {
      today.setDate(0);
    }

    return today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });

  };


    //
  // ALTER DATE BY NUMBER OF DAYS FILTER
  //
  filters.alterTodaysDateByNumberOfDays = function( dayOffset ){

    let today = new Date();
    today.setDate(today.getDate() + dayOffset);

    // Manually format the date to avoid leading zeros (day, month, year)
    return [ today.getDate(), today.getMonth() + 1, today.getFullYear()].join(' '); 

  };
    
  
  //Currency filter to 2 decimals for how paying for things
  filters.currencyOnly = function(value) {
    if (!value) return '';
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    return '£' + num.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };
  
  

  
  return filters;
};
