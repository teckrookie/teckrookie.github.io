inputElements = ['#total-income', '#pf', "#hra", '#exemptions-80c', '#exemptions-others']
CURRENCY_OPTIONS = {
  currencySymbol : '₹',
  digitalGroupSpacing: '2',
  allowDecimalPadding: false
}
AutoNumeric.multiple(inputElements, CURRENCY_OPTIONS);


function knowITSlab() {
    console.log('Know your Slab');
    $('#note').css('display', 'block !important');
}