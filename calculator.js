inputElements = ['#bs', "#hra", '#80c', '#80d', '#da', '#lta', '#epf', '#sa', '#rent', '#nps']
CURRENCY_OPTIONS = {
  currencySymbol : '₹',
  digitalGroupSpacing: '2',
  allowDecimalPadding: false
}
AutoNumeric.multiple(inputElements, CURRENCY_OPTIONS);


function knowITSlab() {
    console.log('Know your Slab');
    $('#note').css('visibility', 'visible');
}