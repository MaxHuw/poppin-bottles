

function test() {

  var investment = 10;

  var fullBottles = investment / 2;
  var returnOnInvestment = fullBottles;
  var emptyBottles = 0;
  var caps = 0;

  popBottles(fullBottles);

}



function popBottles(fullBottles) {

  if (fullBottles <= 0){
    return;
  }

  emptyBottles += fullBottles;
  caps += fullBottles;

  if (emptyBottles > 2) {
    fullBottles += Math.floor(emptyBottles / 2);
    emptyBottles -= Math.floor(emptyBottles / 2);
    returnOnInvestment += Math.floor(emptyBottles / 2);
  }

  if (caps > 4) {
    fullBottles += Math.floor(caps / 4);
    caps -= Math.floor(caps /4);
    returnOnInvestment += Math.floor(caps /4);
  }


  return popBottles(fullBottles);

}


test();

console.log(fullBottles, emptyBottles, caps);