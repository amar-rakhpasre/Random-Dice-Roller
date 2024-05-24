function rollDice(){

    const userinput = document.getElementById("userinput").value;
    const diceResult = document.getElementById("diceResult");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const imgs = [];

    for(let i = 0; i < userinput; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        imgs.push(`<img src="./${value}.png" alt="Dice ${value}">`);
          
    }
    
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceimg.innerHTML = imgs.join(" ");
}

