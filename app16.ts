
let guests : string[] = ["Shafay","Safwan","safia","Waqas"];
console.log("I found a big dinner table");
//let newGuests : string[] = ["Manahil","Sufyan","uroosa"];
guests.unshift("Manahil");
guests.splice(guests.length / 2 , 0,"Sufyan");
guests.push("uroosa");

guests.forEach(guests =>{
    console.log(`Dear ${guests} you are invited today`);
});
