console.log("this is inject");

//----this is part 1 question-----//


let Fruits = ["Apple","banana","orange","grapes"];

///   quyestion 1  this is add last element on the array
Fruits.push("watermelon")
console.log(Fruits)

// question 2  remove first elemnt in array

Fruits.shift();
console.log(Fruits);


//  question 3  this is replace an Array element
Fruits[2] = "kiwi"
console.log(Fruits);


// question 4 this is find index on array elemnt

bananaindex = Fruits.indexOf("banana")
console.log(bananaindex);

//question 5 this is how many data on your array using lengh

console.log(Fruits.length)



//------this is part 2 question-----//


let numbers = [10,20,30,40,50];


//this is 1st question  we can use  (map)

const updatenumbers = numbers.map((num) =>{
    return num*2;
});
console.log(updatenumbers);


//this is 2nd question

const filternumber = numbers.filter((newnum)=>{
    if(newnum >= 30){
        return newnum
    }
   
});

console.log (filternumber,"filter number");


// this is 3rd question   ----google ----  https://shorturl.at/vxOPS

const sum = numbers.reduce((acc,sumnumbers)=>{
    return acc + sumnumbers;

},0)
console.log(sum, "sum of the numbers");




///---- this is part 3 question---//

//this is 1st question

 let names =  ["Alice", "Bob", "Charlie", "David", "Eve"];   //i use foreach method
names.forEach((updatename, index)=>{
    console.log("name of index",""  +index+ ":", "" +updatename);
})


///-----this is part 4 question---//

 let sortNumbers = [8, 2, 10, 4, 6] //// https://tinyurl.com/5953tmx3 -- freecode camp

 /// accendind order
 
 sortNumbers.sort((a,b) => a-b)
 console.log( sortNumbers) /// accendind order


 //decending order
 sortNumbers.sort((a,b) => b-a)
 console.log(sortNumbers)


///this is part 5

//this is 1st questio
 let  mapnumbers = [5, 10, 15, 20, 25]

 let newarray = mapnumbers.map((doublenum)=>{  ///  google (https://www.geeksforgeeks.org/javascript-array-map-method/)
    return doublenum*doublenum;
 });
 console.log(newarray)

 //this is 2nd question//

 let updnumbers = mapnumbers.reduce((acc,sumof) =>{
    return acc + sumof
 },0)
 console.log(updnumbers,"sum of numbers in Array");


 

 ////---this is  part 6 questionn----///



