/**
Creates a random dataset for experimental purposes
*/
var dataset = [];                                                                           //Initialize empty array
for (var i = 0; i < 25; i++) {                                                        //Loop 25 times, change the number to change the size of the array
    var newNumber = Math.floor(Math.random() * 30 +1);     //New random integer  (1-30)
    dataset.push(newNumber);                                                    //Add new number to array
}

