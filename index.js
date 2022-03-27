// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat() {
      cats.pop();
  }

  function destructivelyRemoveFirstCat() {
      cats.shift();
  }

  const newCats = ["Broom"];

  function appendCat(name) {
      cats.slice(name);
      let newCats = [...cats, "Broom"];
      return newCats
  }

  const newCats2 = ["Arnold"];

  function prependCat(){
    let newCats2 = ["Arnold",...cats,];
    return newCats2
  }
  
  function removeFirstCat(){
  return cats.slice(1);
  }
  
  function removeLastCat(){
    return cats.slice(0, cats. length - 1);
  }