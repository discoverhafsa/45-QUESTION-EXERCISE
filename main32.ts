let current_users:string[] = ["user1","user2","user3","user4","user5"];
let new_users:string[] = ["user6","user2","user7","user8","user5"];
new_users.forEach(new_users =>{
    if(current_users.some(current_users =>current_users ===new_users)){
        console.log(`${new_users} will need to entre a new user name.`)
    } else{
        console.log(`${new_users} is available`)
    }});
