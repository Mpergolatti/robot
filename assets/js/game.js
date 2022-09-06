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
            playerMoney = playerMoney - 10;
            console.log('playerMoney:', playerMoney);
            break;

        }

    }
        
        //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        
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
      
        //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        
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
  for (var i = 0; i <enemyNames.length; i++) {
  // resets player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
      } else {
          window.alert('You have lost your robot in battle! Game Over!');
          break;
      }
    }
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
            endGame();
          };
        }; // end of endGame function
      //play again
      startGame();

  }; // end of startGame function

    
  startGame();

  // 3.3.4