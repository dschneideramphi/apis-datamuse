//words-list.js

let colors = ["red", "green", "orange", "yellow", "magenta", "cyan", "lime", "blue"];
let containerElt = document.querySelector("#container");


//Example Function: gets words related to whatever the user types
async function getWord(word) {
  result = await fetch(`https://api.datamuse.com/words?ml=${word}`)
          .then(res => res.json()
            .then((result) => {
                    updateScreen(result)
                }
            )
          );
}

//Updates the screen
const updateScreen = (result) => {
  containerElt.innerHTML = "";
  for(r of result) {
    let newDiv = document.createElement("div");
    newDiv.style.background = colors[Math.floor(Math.random()*colors.length)];
    newDiv.innerHTML = r.word;
    containerElt.appendChild(newDiv);
  }
}

//Your Task: create 2 more async functions that use the datamuse API
//Hint: you should only need to change the text inside the fetch command
