//players name, health, attack and money


var randomNumber = function(min, max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  
      return value;
};

var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // conditional recursive function call
    if (promptFight === "" || promptFight === null) {
      window.alert("Please Enter FIGHT or SKIP to continue")
      return fightOrSkip();
    }

    // If player picks "Skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        shop();
      }
    }
  }
// the fight function
var fight = function(enemy) {
  
  // repeat and execute a battle as long as robot is alive
  while(playerInfo.health > 0 && enemy.health > 0) {
    
    // This calls the #2 function fightOrSkip above the fight function
    fightOrSkip();
    
    //Generate random number value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    //Subtract the value of playerInfo.attack from the value of enemy.health and use that result to update the value in the enemy.health variable
    enemy.health = Math.max(0, enemy.health - damage);
    
    // log a resulting message to the console so we know it worked
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    
    
    //check enemies health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      
      // award the player money for winning the battle
      playerInfo.money = playerInfo.money + 20;
      
      // Leave while() since enemy is dead
      break;
      
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    //Subtract the value of enemy.attack from the value of playerInfo.health and use that result to update the value in the playerInfo.health variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    // log a resulting message to the console so we know it worked
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
    //check players health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() since player is dead
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  } // end of while loop
}; 

// function to start a new game
var startGame = function() {
  // resets player stats
  playerInfo.reset();
  
  for (var i = 0; i < enemyInfo.length; i++) {
    
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
  
      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];
      
    // reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);
    
    // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
    fight(pickedEnemyObj);
    
    //if player is still alive and we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
      //if yes take them to the store() function
      if (storeConfirm) {
        shop();
      }
    }
  } else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
// after loop ends, we are either out of playerInfo.health or enemies to fight so run the endGame function
endGame();
};

// endGame function start
var endGame = function() {
  window.alert("The game has now ended. Lets see how you did!");
  
  if (playerInfo.health > 0) {
    window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } else {
    window.alert("You have lost your robot in battle! Game Over!");
  }
  
  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  };
};

// shop function start
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "would you like to REFILL health, UPGRADE attack or LEAVE store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
    );
    debugger;
    switch(shopOptionPrompt) {
      case "REFILL":
        case "refill":
          case "Refill":
            playerInfo.refillHealth();
            break;
            
            case "UPGRADE":
              case "upgrade":
                case "Upgrade":
                  playerInfo.upgradeAttack();
                  break;
                  
                  case "LEAVE":
                    case "leave":
                      case "Leave":
                        window.alert("leaving the store.");
                        
                        //do nothing, so function will end
                        break;
                        default:
                          window.alert("You did not pick a valid option. Try again.");
                          
                          //call shop() again to force player to pick a valid option
                          shop();
                          break;     
                        } 
};

// getPlayerName function start
var getPlayerName = function() {
  var name = "";

    while (name === "" || name === null)  {
      name = prompt("what is your robot's name?");
    }

  console.log("Your robot's name is " + name);
  return name;
};

// playerInfo start
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading players attack by 6 for 7 dollars");
    this.attack += 6;
    this.money -= 7;
  } else {
    window.alert("You don't have enough money!");
  }
}
};

// enemyInfo start
var enemyInfo = [
  {
    name: "Roboto",
    attack: 12,
    },
  {
    name: "Amy Android",
    attack: 13,
    },
    {
      name: "Robo Trumble",
      attack: 14,
    }
];
  

startGame();


// 3.5.5 