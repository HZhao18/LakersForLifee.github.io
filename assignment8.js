//A
// § Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110

let NetsAverage = (96+108+89)/3
let KnicksAverage = (88+91+110)/3

console.log("Nets:",NetsAverage,"Knicks:",(KnicksAverage))

if (KnicksAverage > NetsAverage) {
  console.log("Knicks win!")
} else if (NetsAverage > KnicksAverage) {
  console.log("Nets win!")
} else {
  console.log("No one wins!")
}
//§ Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
console.log("Bonus I")
let NetsAverageI = (97+112+101)/3;
let KnicksAverageI= (109+95+123)/3;
console.log("Nets:",NetsAverageI,"Knicks:",(KnicksAverageI))
let minimumScore = 100;

if (KnicksAverageI > NetsAverageI && KnicksAverageI > minimumScore) {
  console.log("Knicks Win")
} else if (NetsAverageI > KnicksAverageI && NetsAverageI > minimumScore) {
  console.log("Nets Win")
}
  else if (KnicksAverageI > NetsAverageI && KnicksAverageI < minimumScore) {
    console.log("No winner.")
  }
  else if (NetsAverageI > KnicksAverageI && NetsAverageI < minimumScore) {
    console.log("No winner")
  }

//§ Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106
console.log("Bonus II")
let NetsAverageII = (97+112+101)/3;
let KnicksAverageII= (109+95+106)/3;
console.log("Nets:",NetsAverageII,"Knicks:",(KnicksAverageII))
let minimumScoreII = 100;

if (KnicksAverageII > NetsAverageII && KnicksAverageII > minimumScore) {
  console.log("Knicks Win")
} else if (NetsAverageII > KnicksAverageII && NetsAverageII > minimumScore) {
  console.log("Nets Win")
}
  else if (KnicksAverageII > NetsAverageII && KnicksAverageII < minimumScore) {
    console.log("No winner.")
  }
  else if (NetsAverageII > KnicksAverageII && NetsAverageII < minimumScore) {
    console.log("No winner")
  }
  else if (NetsAverageII = KnicksAverageII && NetsAverageII > minimumScoreII && KnicksAverageII > minimumScoreII) {
    console.log("Draw")
  }

// B (tip calculator)

//Bill Values: 275, 28 and 430

let tip1 = 0.15
let tip2 = 0.20

console.log("The bill was $275, the tip was $" + 275*tip1 + " and the total value is $" + (275*(1+tip1))+".")
console.log("The bill was $28, the tip was $" + 28*tip1 + " and the total value is $" + (28*(1+tip1))+".")
console.log("The bill was $275, the tip was $" + 430*tip2 + " and the total value is $" + (430*(1+tip2))+".")


