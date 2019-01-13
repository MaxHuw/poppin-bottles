

var popBottles = {

  investment: 0,
  fullBottles: 0,
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

   // console.log(this.fullBottles, this.emptyBottles, this.caps, this.totalReturn);

    if (this.emptyBottles >= 2) {
      this.fullBottles += Math.floor(this.emptyBottles / 2);
      this.totalReturn += Math.floor(this.emptyBottles / 2);
      this.emptyBottles -= Math.floor(this.emptyBottles / 2) * 2;
    }

    if (this.caps >= 4) {
      this.fullBottles += Math.floor(this.caps / 4);
      this.totalReturn += Math.floor(this.caps /4);
      this.caps -= Math.floor(this.caps /4) * 4;
    }


    return this.calcInvestment(this.fullBottles);

  }

};

var startingCap = process.argv.slice(2);

popBottles.investment = Number(startingCap[0]);
popBottles.fullBottles = Math.floor(popBottles.investment / 2);
popBottles.totalReturn = Math.floor(popBottles.investment / 2);


popBottles.calcInvestment(popBottles.fullBottles);

console.log(popBottles.fullBottles, popBottles.emptyBottles, popBottles.caps, popBottles.totalReturn);