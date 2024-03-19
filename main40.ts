function make_album(artistname:string, albumtitle:string, track?:number) {
let album = {artistname, albumtitle, track}
if (track){
    album ['track'] = track;
}
return album;
}
console.log(make_album("artist one","the first album",));
console.log(make_album("artist two","the seond album",3));
console.log(make_album("artist three","the third album",));