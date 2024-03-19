let guests : string[] = ["Shafay","Safwan","Irfan","Waqas"];
let notAttend = "Irfan";
let canAttend = "Safia";
guests[guests.indexOf(notAttend)] = canAttend;
console.log(`${notAttend} can't make for dinner`)
guests.forEach(guests =>{
    console.log(`Dear ${guests} you are invited today for dinner`);
});