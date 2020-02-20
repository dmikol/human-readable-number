module.exports = function toReadable (number) {
  let obj = {
      0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight',
      9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
      16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty'
      , 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
  }
  if(number < 21){
      return obj[number];
  }else if(number < 100 && String(number)[1] !== '0'){
      switch(String(number)[0]){
          case '2':
          return 'twenty '+ obj[String(number)[1]];
          case '3':
          return 'thirty '+ obj[String(number)[1]];
          case '4':
          return 'forty '+ obj[String(number)[1]];
          case '5':
          return 'fifty '+ obj[String(number)[1]];
          case '6':
          return 'sixty '+ obj[String(number)[1]];
          case '7':
          return 'seventy '+ obj[String(number)[1]];
          case '8':
          return 'eighty '+ obj[String(number)[1]];
          case '9':
          return 'ninety '+ obj[String(number)[1]];
      }
  }else if(number < 100){
     return obj[number];
  }else if(String(number).slice(1) == '00'){
    return obj[String(number)[0]] + ' hundred';
  }else if(Number(String(number).slice(1)) < 20){
    return obj[String(number)[0]] + ' hundred '  + obj[Number(String(number).slice(1))];
  }else if(String(number)[2] == '0'){
    return obj[String(number)[0]] + ' hundred ' + obj[String(number).slice(1)];
  }else{
    return obj[String(number)[0]] + ' hundred ' + obj[String(number)[1]+'0'] + ' ' + obj[String(number)[2]];
  }

}
