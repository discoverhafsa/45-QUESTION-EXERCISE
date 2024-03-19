let magicianNames:string[] = ["Aladin","Albert","Eric",]
function show_magicians(magicianNames:string[]){
    magicianNames.forEach(magicianNames => {
        console.log(magicianNames);
    });
}
show_magicians(magicianNames);
function make_great(magicianNames:string[]){
    for(let i=0; i<magicianNames.length; i++){
        magicianNames[i] = magicianNames[i] + "the great"
    }
}
make_great(magicianNames);
show_magicians(magicianNames);