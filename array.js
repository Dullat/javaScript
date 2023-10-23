//array elements 
const array = ["mango", "orange", "apple"];
// array are objects
const cars = {bmw:"m4-800", tyota:"supra"}; 
// alements also can be objects
const names = [{name:"dullat", sname:"jatt"},"haha"];


let text = "<ul>";
for(let i = 0; i < array.length; i++){
    text += "<li>" + array[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = array.toString(" ") + " "+
 cars.tyota + " " +
 cars.bmw + " " +
 names[0].sname + " " +
 names.length + " " +
 array.sort() + " " +
 array[array.length -1] + " " +
 text;

 console.log(text);


 let fruits = ["mango","mango","mango","mango","mango","mango","mango","mango","mango",];
 fruits.push("lemon");///push function

 let list = `<ul class="f">`;

 fruits.forEach(listfun);
 list +=`</ul>`;

 function listfun(i){
    list += `<li>` + i + `</li>`;
 }

 document.getElementById("fruit-list").innerHTML = list;

 delete array[1];

 console.log(array.join(" + "));

 let newArray = array.concat(fruits);

 console.log(newArray);