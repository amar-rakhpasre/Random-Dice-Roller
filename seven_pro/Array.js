// arrya = a variable like structure that can hold more tha 1 value

// let cryptoCurrencys = ["Bitcoin","ethreum","shibainu","Bittorut","polygon","bybecoin","Dogicoin","BNB","SOL","XRP"];

// // cryptoCurrency[0] = "DOT";
// cryptoCurrency.push("DOT");// last me element add karne ke liye

// cryptoCurrency.pop();// last ka element Remove karne ke liye

// cryptoCurrency.unshift("pancake"); // start me element add karne ke liye

// cryptoCurrency.shift();// start ka element Remove karne ke liye


// let numofcryptoCurrency = cryptoCurrency.length;//arrya ki length count ke liye

// let index = cryptoCurrency.indexOf("polygon");//arrya ke element ka index pata karne ke liye

// for(let i = 0; i<cryptoCurrency.length; i++){//arrya ke sab element print karne ke liye
//     console.log(cryptoCurrency[i]);
// }
// for(let i = cryptoCurrency.length - 1; i>=0; i--){//arrya ke sab element "REvars" me print karne ke liye
//     console.log(cryptoCurrency[i]);
// }

// cryptoCurrencys.sort().reverse();


// for(let cryptoCurrency of cryptoCurrencys){//arrya ke sab element "sortcut" me print karne ke liye
//     console.log(cryptoCurrency);
// }

// console.log(index);
// console.log(cryptoCurrency);
// console.log(cryptoCurrency[0]);
// console.log(cryptoCurrency[1]);
// console.log(cryptoCurrency[2]);
// console.log(cryptoCurrency[3]);

// -----------------------------------------------Spread operator 📖--------------------------------------------------

// spread operator = (...variableName) allows an iterable such as an arrya or string to be expanded into seperate Element(unpacks the Element)

// let rollNum = [1,2,3,4,5,6,7,8,9];
// let maxiNum = Math.max(...rollNum);
// let miniNum = Math.min(...rollNum);

// console.log(maxiNum);
// console.log(miniNum);

// let userName = "King_yamma";
// let speradUN = [...userName].join("");

// console.log(speradUN);


// let cryptoCurrencys = ["Bitcoin","ethreum","shibainu","Bittorut","polygon","bybecoin","Dogicoin","BNB","SOL","XRP"];

// let Currencys = ["Dollar","Euro","Rupee","Pound","Dinar","Peso","Yuan","Afghani","yen","Ruble"];


// let coins = [...cryptoCurrencys, ...Currencys, "NFT", "PRODUCT"].join(":- ");

// console.log(coins);


// -----------------------------------------------rest operators 📖--------------------------------------------------

// rest operators = (...rest) allow a function work with a variable number of arguments by bundling them into an Array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

//  function wwePlayers(...Players){
//     Players = [...Players].join(":- ");
//     console.log(Players);
//  }

//  function smakDown(...Players){
//     return Players;
//  }

//  const Player1 = "Jhon Cena";
//  const Player2 = "Goldust";
//  const Player3 = "Matt Hardy";
//  const Player4 = "The Miz";
//  const Player5 = "Goldberg";
//  const Player6 = "Batista";
//  const Player7 = "CM Punk";
//  const Player8 = "Big Show";
//  const Player9 = "Diesel";
//  const Player10 = "Rob Van Dam";
//  const Player11 = "Kofi Kingston";
//  const Player12 = "Rey Mysterio";
//  const Player13 = "Jeff Hardy";
//  const Player14 = "Randy Orton";
//  const Player15 = "The Ultimate Warrior";
//  const Player16 = "Brock Lesnar";
//  const Player17 = "Kane";
//  const Player18 = "Triple H";
//  const Player19 = "Chris Jericho";
//  const Player20 = "Edge";
//  const Player21 = "Mick Foley";
//  const Player22 = "Eddie Guerrero";
//  const Player23 = "Kurt Angle";
//  const Player24 = "The Rock";
//  const Player25 = "Andre The Giant";
//  const Player26 = "The Undertaker";
//  const Player27 = "Steve Austin";
//  const Player28 = "Shawn Michaels";
//  const Player29 = "Hulk Hogan";
//  const Player30 = "Booker T";

 
// //  wwePlayers(Player1,Player2,Player3,Player4,Player4,Player5,Player6,Player7,Player8,Player9,Player10,Player11,Player12,Player13,Player14,Player14,Player15,Player16,Player17,Player18,Player19,Player20,Player21,Player22,Player23,Player24,Player25,Player26,Player26,Player27,Player28,Player29,Player30);

// const Players =  smakDown(Player1,Player2,Player3,Player4,Player4,Player5,Player6,Player7,Player8,Player9,Player10,Player11,Player12,Player13,Player14,Player14,Player15,Player16,Player17,Player18,Player19,Player20,Player21,Player22,Player23,Player24,Player25,Player26,Player26,Player27,Player28,Player29,Player30, "Edge");

// console.log(Players);


 
