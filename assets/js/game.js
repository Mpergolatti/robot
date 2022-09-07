//players name, health, attack and money
var playerName = window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

// enemies name, health and attack
var enemyNames = ['Roboto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;



  
  
  // creates a window alert saying the fight has begun
var fight = function(enemyName) {
    
    // repeat and execute a battle as long as robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

    // asks player if they want to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip this fight? You will lose 10 gold");
        
        // if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            
            // subtract money for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log('playerMoney:', playerMoney);
            break;

        }

    }
        //Generate random number value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = Math.max(0, enemyHealth - damage);
        
        // log a resulting message to the console so we know it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        

            //check enemies health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                // award the player money for winning the battle
                playerMoney = playerMoney + 20
                console.log('playerMoney:', playerMoney);

                // Leave while() since enemy is dead
                break;
                
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = Math.max(0, playerHealth - damage);
        
        // log a resulting message to the console so we know it worked
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
            //check players health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while() since player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } // end of while loop
    }; // end of fight function

// function to start a new game
var startGame = function() {
  // resets player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  enemyHealth = randomNumber(40, 60);
  
  
  for (var i = 0; i <enemyNames.length; i++) {

  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    
    // reset enemyHealth before starting new fight
    enemyHealth = Math.floor(Math.random() * 21) + 40;
    
    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    //if player is still alive and we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {

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
  // after loop ends, we are either out of playerHealth or enemies to fight so run the endGame function
  endGame();
  };

   // end of endGame function
var endGame = function() {
  window.alert("The game has now ended. Lets see how you did!");

  if (playerHealth > 0) {
    window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
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

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "would you like to REFILL health, UPGRADE attack or LEAVE store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
    );
      switch(shopOptionPrompt) {
        case "REFILL":
          case "refill":
            case "Refill":
          if (playerMoney >= 7) {
          window.alert("Refilling players Health by 20 for 7 dollars.");

          // increase health and decrease money
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
          } else {
            window.alert("You don't have enough money!");
          }
          break;
        
        case "UPGRADE":
          case "upgrade":
            case "Upgrade":
          if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars");

          // increase attack and decrease money
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
          } else {
            window.alert("You don't have enough money!");
            }
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
  
  // random number generator
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
    };
  // end of startGame function

  startGame();


  // 3.3.4