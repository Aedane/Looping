
let triangle = "#";

while ( triangle.length <=7) {
    console.log(triangle); 
    triangle += "#";
}

console.log("\n");

for (let triangle = "#"; triangle.length < 8; triangle += "#"){
    console.log(triangle);
}

//triangle.length could be less and equal to 7

console.log("\n");

/*
The do loop is a control structur similar to the while loop, it differs only on one point.
Do loop always executes its body at least once, and it starts testing whether it should stop
only after that first execution
*/

do {
    let triangle = "#";
} while (triangle.length <= 7) {
    triangle += "#";
}
console.log(triangle);