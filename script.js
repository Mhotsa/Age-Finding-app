var year = new Date().getFullYear();
console.log(year);
//Storing user's birth in a variable named users_birth_year on click of a button
function show() {
    var users_birth_year = document.getElementById("birth_year").value;
    console.log(users_birth_year);
    //Checking if user's birthday have arrived already or not
    var arrived_or_not = document.getElementById("birth_before_after").value;
    //Final Result
    console.log(arrived_or_not);
    if(arrived_or_not == "No"){
        var age = year - users_birth_year;
        age = age - 1;
        console.log(age);
        document.getElementById("answer").innerHTML = "<h2> Is your age " + age + " ?" + "</h2>"
    }
    else {
        var age = year - users_birth_year;
        console.log(age);
        document.getElementById("answer").innerHTML = "<h2> Is your age " + age + " ?" + "</h2>"
    }
}