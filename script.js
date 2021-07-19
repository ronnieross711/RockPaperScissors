function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    console.log("computerChoice:", botChoice);
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);
    message = finaleMessage(results); // {'message': 'You Won!', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
  }
  
  function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
  }
  
  function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
  }
  
  function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
      rock: { scissors: 1, rock: 0.5, paper: 0 },
      paper: { rock: 1, paper: 0.5, scissors: 0 },
      scissors: { paper: 1, scissors: 0.5, rock: 0 },
    };
  
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
  
    return [yourScore, computerChoice];
  }
  
  function finaleMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
      return { message: "You Lost!", color: "red" };
    } else if (yourScore === 0.5) {
      return { message: "You Tied!", color: "yellow" };
    } else {
      return { message: "You Won!", color: "green" };
    }
  }
  
  function rpsFrontEnd(humanImageChoice, botImageChoice, finaleMessage) {
    var imagesDatabase = {
      rock: document.getElementById("rock").src,
      paper: document.getElementById("paper").src,
      scissors: document.getElementById("scissors").src,
    };
    // let's remove all the images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
  
    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
  
    humanDiv.innerHTML =
      "<img src='" +
      imagesDatabase[humanImageChoice] +
      "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML =
      "<h1 style='color: " +
      finaleMessage["color"] +
      "; font-size: 60px; padding 30px; '>" +
      finaleMessage["message"] +
      "</h1>";
    botDiv.innerHTML =
      "<img src='" +
      imagesDatabase[botImageChoice] +
      "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
  
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  }

  function reset() {
      window.location.reload()
  }