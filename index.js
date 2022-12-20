// 1. Massiv elementlari yig'indisini hsioblaydigan funksiya yozing
function total(arr) {
    let sum = 0;
      arr.forEach(element => {
            sum += element;
      });
      console.log("1chi" + " " + sum);
 }
 
total([1, 2, 3]); // 6
 
 
 // 2. Massiv elementlarini birlashtiradigan (concatanate)funksiya yozing

 function stringConcat(array) {
    let add = array.join('');
    console.log(add);
}
stringConcat([1, 2, 3]);
 
 // 3. Nechta odam ovoz berganini hisoblovchi funksiya yozing. voted: true bo'lsa, ovoz bergan bo'ladi
 
 function totalVotes(arr) {
    voter = 0
    arr.forEach(vote => {
        if ( vote.voted === true){
            voter++
        }
    });
    console.log(`Ovoz berganlar : ${voter}`); }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: true},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
totalVotes(voters); // 8
 
// 4. Agar har bir elementdan 1 tadan sotib olinsa, jami qancha bo'ladi

function shoppingSpree(arr) {
    let pay = 0;
    arr.forEach( money => {pay += money.price;});
    return pay;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist) + "$");  // 227005

// 5. Massivlardan tashkil topgan massiv elementlarini birlashtiruvchi funksiya yozing

function flatten(arr) {
    let elementlar = [];
    let result = arr.join(' ');
    elementlar.push(result);
    return elementlar;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6. 18-25, 26-35, 36-55 yoshdagi ovoz berganlar va ovoz beruvchilar sonini chiqaruvchi funksiya yozing.
// Chiqishi kerak bo'lgan natija namunasi  pastda ko'rsatilgan

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    let Young = 0;
    let Middle = 0;
    let Elderly = 0;
    for (let i = 0; i < arr.length; i++){
         if (arr[i].voted === true){
                if (arr[i].age <= 25) {
                    Young++;
                }
                if (arr[i].age <= 35 && arr[i].age >= 26) {
                    Middle++;
                }
                if (arr[i].age >= 36) {
                    Elderly++;
                }
         }
    }
    console.log(`Returned value shown below: Young people: ${Young}` + " " +` Middle ages: ${Middle}` + " " + `The Elderly: ${Elderly}`);
}

voterResults(voters); // Returned value shown below:

// 7. Musbat elementlar yig'indisini toping;

let array = [1, -4, 12, 0, -3, 29, -150];
function sumPositive(arr) {
      let sum = 0;
      arr.forEach(element => {
         if (element > 0) {
            sum += element
         }   
      });
      console.log(sum);
}
sumPositive(array) // 42