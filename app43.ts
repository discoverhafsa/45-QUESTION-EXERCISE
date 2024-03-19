let magicianNames:string[] = ["Aladin","Albert","Eric",]
function make_great(magicianNames:string[]) : string[] {
let greatMagicians:string[]= [];
    magicianNames.forEach(magicianNames => {
        greatMagicians.push(`${magicianNames} the graet`);
    });
    return greatMagicians
}
let greatMagicians = 
make_great(magicianNames.slice());
console.log(`oiginal magicians: ${magicianNames}`);
make_great(magicianNames);
console.log(`great magicine: ${greatMagicians}`);
make_great(greatMagicians);
