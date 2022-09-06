//players name, health, attack and money
var playerName = window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemies name, health and attack
var enemyNames = ['Roboto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;




// creates a window alert saying the fight has begun
var fight = function(enemyName) {

    // repeat and execute a battle as long as robot is alive
    while(enemyHealth > 0) {

    // asks player if they want to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        
        //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        
        // log a resulting message to the console so we know it worked
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        

        //check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        
        // if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            
            // subtract money for skipping
            playerMoney = playerMoney - 2;
        }

        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
  }
};


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}



// 3.2.1

// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames[3]);
// console.log(enemyNames.length);
// for (var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + ' is at ' + i + ' index');
// }

// Game States

// "WIN" - Player robot has defeated all enemy-robots

//    * Fight all enemy-robots

//    * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less