//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getRandomMeme)

let random;
  let max = 99;

function getRandomMeme(){
  random = Math.floor(Math.random() * max)


  // const choice = document.querySelector('input').value
  // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  // let memes = document.querySelector('input').value

  fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data.memes[random].name
        document.querySelector('img').src = data.data.memes[random].url
        // document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}