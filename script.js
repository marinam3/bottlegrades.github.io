
//- Create a web page that asks a user how many subjects they take, and what marks they got in each subject. 
//The application should then output their results
//Bonus: Tell the user their grade from A-F based on their results

function bottles() {
    for (i = 99; i >= 1; i = i - 1) {
        document.getElementById("main").innerHTML += i + " bottles of beer on the wall " + i + " bottles of beer. Take one down and pass it around " + (i - 1) + " bottles of beer on the wall.";
        if (i == 1) {
            document.getElementById("main").innerHTML += i + " bottle of beer on the wall " + i + " bottle of beer. Take one down and pass it around " + (i - 1) + " bottles of beer on the wall.";
        }
    }
}

function grades() {
    let numsubj = prompt("Enter number of subjects");
    let ns = parseInt(numsubj);
    let sum = 0;
    let results;

    for (i = 0; i < ns; i++) {
        let marks = prompt("Enter marks for subject " + (i + 1));
        let mks = parseInt(marks);
        sum = sum + mks;
    }
    results = sum / ns;
    console.log(results);

    if (results >= 70) {
        document.getElementById("main").innerHTML += "Your result is " + results + ". Your grade is A.";
    }
    else if (results >= 60) {
        document.getElementById("main").innerHTML += "Your result is " + results + ". Your grade is B.";
    }
    else if (results >= 50) {
        document.getElementById("main").innerHTML += "Your result is " + results + ". Your grade is C.";
    }
    else if (results >= 44) {
        document.getElementById("main").innerHTML += "Your result is " + results + ". Your grade is D.";
    }
    else if (results >= 40) {
        document.getElementById("main").innerHTML += "Your result is " + results + ". Your grade is E.";
    }
    else {
        document.getElementById("main").innerHTML += "Your result is " + results + ". Your grade is F.";
    }
}