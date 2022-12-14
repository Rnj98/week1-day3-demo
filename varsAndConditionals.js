/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Anakin and Obiwan.
*/ 

let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack > anakinAttack) {
    console.log('Obiwan is stronger')
} else if (anakinAttack > obiwanAttack){
    console.log('Anakin has the power!')
} else {
    console.log('The force is with them both')
}

let obiwanHealth = 100
let obiwanDefence = 0

obiwanDefence += 25

if(obiwanHealth <= (anakinAttack - obiwanDefence)){
    console.log('Obiwan has been slain!')
} else {
    obiwanHealth -= (anakinAttack - obiwanDefence)
    console.log(`Obiwans health is ${obiwanHealth}`)
}

if(obiwanHealth + 50 >= 100) {
    obiwanHealth = 100
    console.log('Thanks to bacta, Obi is at full health')
} else {
    obiwanHealth += 50
    console.log(`Thanks to bacta, Obi has ${obiwanHealth} health`)
}

let coinLandsHeads = true

if(coinLandsHeads === true){
    console.log('The fight continues')
} else {
    console.log('Obiwan is alloud to retreat')
}

for(let i = 0; i < 5; i++){
    obiwanHealth -= (anakinAttack - obiwanDefence)
    console.log(`Obiwans health is ${obiwanHealth}`)
}

while(obiwanHealth > 0){
    obiwanHealth -= (anakinAttack - obiwanDefence)
    console.log(`Obiwans health is ${obiwanHealth}`)

    if(obiwanHealth <= 0){
        console.log('At least we dont have to deal with Rey.')
    }
}

console.log('this was a good fight. kinda.')