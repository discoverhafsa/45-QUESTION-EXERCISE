let usernames:string[] = ["albert","john","admin","jack","alis"];
usernames.forEach(usernames=>{
if (usernames === "admin") {
    console.log("Hello admin, wd you like to see a status report?");
} else {
    console.log(`Hello ${usernames}, thank you for logging in again.`);
}});