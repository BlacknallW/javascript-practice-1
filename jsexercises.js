//Use function to greet given parameter
const hello = (name="world") =>{
    console.log(`Hello, ${name}!`);
}
hello()

//use function for mad lib. Likely the same one from Python.
const madLib = (name, subject) =>{
    return `${name}'s favorite subject in school is ${subject}.`;
}

console.log(madLib("William", "Science"))

//uses function to determine tip amount
const tipAmount = (billAmount, serviceLevel) => {
    if (serviceLevel == "fair"){
        return billAmount * .15;
    }   
    if (serviceLevel == "good"){
        return billAmount * .2
    }
    if (serviceLevel == "bad"){
        return billAmount * .1
    }
}

console.log(tipAmount(100, "good"))

//same as above but returns total bill amount
const totalAmount = (billAmount, serviceLevel) => {
    if (serviceLevel == "fair"){
        return billAmount * 1.15;
    }   
    if (serviceLevel == "good"){
        return billAmount * 1.2
    }
    if (serviceLevel == "bad"){
        return billAmount * 1.1
    }
}

console.log(totalAmount(50,"fair"))

//Another same as above, but also splits the bill evenly among party members
const splitBill = (billAmount, serviceLevel, partySize) => {
    if (serviceLevel == "fair"){
        return (billAmount * 1.15) / partySize
    }   
    if (serviceLevel == "good"){
        return (billAmount * 1.2) / partySize
    }
    if (serviceLevel == "bad"){
        return (billAmount * 1.1) / partySize
    }
}
console.log(splitBill(75,"bad",8))