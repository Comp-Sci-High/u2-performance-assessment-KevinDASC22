const prompt = require('prompt-sync')()
let apikey = "6002a335745c47508401da2badfedd5f"
let keys = "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"

async function recipeImage(protein, calories) {
  try{
  let requestURL = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=6002a335745c47508401da2badfedd5f&minProtein=" + protein + "&maxCalories="+calories

  const response = await fetch(requestURL);

  if(response.ok === false){
    console.log("HTTP error! Status:"+response.status)
  }

  const data = await response.json();

  console.log("You should eat"+data[0].title);
  console.log("It has "+calories+"calories, and"+protein+"grams of protein")
  return data;
}catch(error){
  console.log("An error occured:"+error.message);
}
}



let requestURLS = "https://api.openai.com/v1/images/generations"
async function aiimages(something) {
  try{
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + keys
    },
    body: JSON.stringify(something)
  }
  const response = await fetch(requestURLS, options)

  if(response.ok === false){
    console.log("HTTP error! Status:"+response.status)
  }
  const data = await response.json();
  console.log(data.url);
  return data;
}catch(error){
  console.log("An error occurred:"+error.message)
}
}

aiimages({
  prompt: "food"
})

let firstquestion = prompt("How much protein do you want in a meal?")
let secondquestion = prompt("How much calories do you want that same meal to be?") 
recipeImage(firstquestion,secondquestion)


