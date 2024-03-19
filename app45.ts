function make_car (manufacturer:string, model:string, ...options:[string, any][]):object {
let car = {manufacturer, model};
options.forEach(([key, value]) => {
    car = value
});
return car;
}
console.log(make_car("toyota","corolla", ["color","red"],["year",2019]));
console.log(make_car("ford","fiesa", ["color","red"],["year",2017]),["sunroof", true]);