// var speed = 30;
// var efficiency = "low";

// if (speed <= 30) {
//     efficiency = "medium";
// }   elseif (30 < speed < 90) {
//     efficiency = "high";
// }   elseif(speed >= 30) {
//     efficiency = "low";
// }

// console.log("fuel effieciency: " + efficiency);


var inputGasMilage = parseInt(window.prompt("Enter the Gas Milage")); 

if (inputGasMilage < 30) {
    // I put an alert here so that a popup box with no input area will show up
    // with the sentence in the parenthesis. 
    alert("Based on Gas Milage, Car speed is slow");
    
} else if (inputGasMilage > 30 && inputGasMilage < 56) {
    console.log("Based on Gas Milage, Car speed is average");
}
 else if (inputGasMilage <= 57) {
    console.log("Based on Gas Milage, car speed is high");
}




