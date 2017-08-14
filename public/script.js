console.log("Sanity Check: JS is working!");

$(document).ready(function(){

getPokemon()



});

function getPokemon() {
  $.ajax({
    method: 'GET',
    url: 'http://mutably.herokuapp.com/pokemon'
  }).done(function(data) {
    data.pokemon.forEach((pokemon, i) => {
      $('.list-group').append(`
          <li class="list-group-item">
            <img src="${pokemon.image}">
            <p class="name">Name: ${pokemon.name}</p>
            <p class="pokedex">Pokedex: ${pokemon.pokedex}</p>
            <p class="evolves_from">Evolves from: ${pokemon.evolves_from}</p>
            <button>Edit</button>
            <button>Save</button>
          </li>
        `)
    })
  })
}

function addPokemon() {

}

function deletePokemon() {

}

function updatePokemon() {

}
