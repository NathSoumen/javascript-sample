let whoIsHere = "user"
if (whoIsHere === "user") {
    console.log("Greating to users");
    console.log("Allow access to view all courses");
} else if(whoIsHere === "teacher") {
    console.log("Greating to teacher")
    console.log("Allow access to his courses")

} else {
    console.log("MESSAGE: please verrify")
    console.log("Send notification to admin")
}

let isVerfied = false
let isLoggedIn = false
let hasPaymentMade = true
let isGuest = false

if(isVerfied && isLoggedIn && hasPaymentMade) {
    console.log("Greating message to premium user")
    console.log('Granting access')
} else if (isVerfied && isLoggedIn){
    console.log("greating to free user")
    console.log("chose free course")
} else if(isVerfied || isGuest){
    console.log("welcome guest")
    console.log("show preview")
} else {
    console.log("please contact admin")
}

