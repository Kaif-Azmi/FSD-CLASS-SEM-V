const  car = {
    brand: "Tata",
    model: "xyz",
    year: 2023
}
console.log(car);
console.log(car.brand);
console.log(car.model);

function changeModel(obj){
    obj.model = "abc";
}
console.log(car);
console.log(car.brand);
console.log(car.model);

const myCar = Object.assign({}, car);
myCar.model  = "Thar";
myCar.year['y1'] = 2023;
console.log(car.year['y1']);
console.log(myCar.year['y1']);
console.log(myCar.model);


