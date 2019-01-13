
var popBottles = {

  investment: 10,
  fullBottles: 5,
  totalReturn: 0,
  emptyBottles: 0,
  caps: 0,

  calcInvestment: function(fullBottles) {

    if (fullBottles <= 0){
      return;
    }

    this.emptyBottles += fullBottles;
    this.caps += fullBottles;
    this.fullBottles = 0;

    if (this.emptyBottles > 2) {
      this.fullBottles += Math.floor(this.emptyBottles / 2);
      this.emptyBottles -= Math.floor(this.emptyBottles / 2) * 2;
      this.returnOnInvestment += Math.floor(this.emptyBottles / 2);
    }

    if (this.caps > 4) {
      this.fullBottles += Math.floor(this.caps / 4);
      this.caps -= Math.floor(this.caps /4);
      this.returnOnInvestment += Math.floor(this.caps /4);
    }


    return this.calcInvestment(this.fullBottles);

  }

};


popBottles.calcInvestment(popBottles.fullBottles);

console.log(popBottles.fullBottles, popBottles.emptyBottles, popBottles.caps);