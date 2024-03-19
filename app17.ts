console.log("unfortunately new dinne table will not b on time, but i can invite two people");
let guests : string[] = ["Shafay","Safwan","safia","Waqas","Manahil","Sufyan","uroosa"];
while(guests.length>6){
    let removedguests = guests.pop();
    removedguests = guests.pop();
    console.log(`sorry ${removedguests}, I can't invite you today.`);
}
guests.forEach(guests =>{
    console.log(`Dear ${guests} you are invited today`);
});
guests.splice(0, guests.length);
console.log(guests);// to show empty space
