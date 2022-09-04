//players name, health and attack
var playerName = window.prompt("what is your robots name");
var playerHealth = 100;
var playerAttack = 10;

// enemies name, health and attack
var enemyName = 'Roboto';
var enemyHealth = 50;
var enemyAttack = 12;

// creates a window alert saying the fight has begun
var fight = function() {
    window.alert("Welcome to the robot gladiators game!");

    //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    //check enemies health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window/alert(enemyName + " still has " + enemyHealth + " health left.");
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

};

fight();

// 3.1.7 module 