// CHUPADA BOTONES //

const candidateOne = document.getElementById("canOne");
const candidateTwo = document.getElementById("canTwo");
const candidateThree = document.getElementById("canThree");

// CHUPADA TEXTO DE PARAGRAPH //

let textTotal = document.getElementById("textTotal");
let textCanOne = document.getElementById("text1");
let textCanTwo = document.getElementById("text2");
let textCanThree = document.getElementById("text3");

// VARIABLES // 

// TOTALES //
let totalVotes = 0;

// EACH COUNT //
let candidateOneVotes = 0;
let candidateTwoVotes = 0;
let candidateThreeVotes = 0;


// EACH % //
let candidateOnePerc = 0;
let candidateTwoPerc = 0;
let candidateThreePerc = 0;

// FUNCTIONS //

//candidate 1 function
candidateOne.addEventListener("click", () => {
  candidateOneVotes++;
  totalVotes++;
  function percentageCalc() {
    candidateOnePerc = (candidateOneVotes * 100) / totalVotes;
    candidateTwoPerc = (candidateTwoVotes * 100) / totalVotes;
    candidateThreePerc = (candidateThreeVotes * 100) / totalVotes;

    textTotal.innerText = `the total vote count is: ${totalVotes}`;
    textCanOne.innerText = `Candidate 1 has ${candidateOneVotes} votes and ${candidateOnePerc}% of the votes`;
    textCanTwo.innerText = `Candidate 2 has ${candidateTwoVotes} votes and ${candidateTwoPerc}% of the votes`;
    textCanThree.innerText = `Candidate 3 has ${candidateThreeVotes} votes and ${candidateThreePerc}% of the votes`;
  }
percentageCalc()
});

//candidate 2 function
candidateTwo.addEventListener("click", () => {
  candidateTwoVotes++;
  totalVotes++;
  function percentageCalc() {
    candidateOnePerc = (candidateOneVotes * 100) / totalVotes;
    candidateTwoPerc = (candidateTwoVotes * 100) / totalVotes;
    candidateThreePerc = (candidateThreeVotes * 100) / totalVotes;

    textTotal.innerText = `the total vote count is: ${totalVotes}`;
    textCanOne.innerText = `Candidate 1 has ${candidateOneVotes} votes and ${candidateOnePerc}% of the votes`;
    textCanTwo.innerText = `Candidate 2 has ${candidateTwoVotes} votes and ${candidateTwoPerc}% of the votes`;
    textCanThree.innerText = `Candidate 3 has ${candidateThreeVotes} votes and ${candidateThreePerc}% of the votes`;
  }
percentageCalc()
});

//candidate 3 function
candidateThree.addEventListener("click", () => {
  candidateThreeVotes++;
  totalVotes++;
  function percentageCalc() {
    candidateOnePerc = (candidateOneVotes * 100) / totalVotes;
    candidateTwoPerc = (candidateTwoVotes * 100) / totalVotes;
    candidateThreePerc = (candidateThreeVotes * 100) / totalVotes;

    textTotal.innerText = `the total vote count is: ${totalVotes}`;
    textCanOne.innerText = `Candidate 1 has ${candidateOneVotes} votes and ${candidateOnePerc}% of the votes`;
    textCanTwo.innerText = `Candidate 2 has ${candidateTwoVotes} votes and ${candidateTwoPerc}% of the votes`;
    textCanThree.innerText = `Candidate 3 has ${candidateThreeVotes} votes and ${candidateThreePerc}% of the votes`;
  }
percentageCalc()
});
